<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch }) => {
        const res = await fetch("/tareas.json");

        if (res.ok) {
            const tareas = await res.json();
            return {
                props: { tareas }
            }
        }
        const { message } = await res.json();
        return {
            error: new Error(message)
        }
    };
</script>

<script lang="ts">
    import TodoItem from "$lib/tarea-item.svelte";

    export let tareas:Tarea[];
        
    const titulo= "Tarea";
</script>

<style>
    .tareas {
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }

    .new {
        margin: 0 0 0.5rem 0;
    }
    .new input {
        font-size: 28px;
        width: 100%;
        padding: 0.5em 1em 0.3em 1em;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        text-align: center;
    }

    .tareas :global(input){
        border: 1px solid transparent;
    }

    .tareas :global(input:focus-visible){
        box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ff3e00 !important;
        outline: none;
    }

</style>

<svelte:head>
    <title>{titulo}</title>
</svelte:head>

<div class= "tareas">

    <h1>{titulo}</h1>
    
    <form action="/tareas.json" method="post" class="new">
        <input type="text" name="text" aria-label="Añade una tarea" placeholder="+ clica para añadir tarea" />
    </form>
    
    {#each tareas as tarea}
        <TodoItem {tarea} />
    {/each}

</div>