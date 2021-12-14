<style>
    .tarea {
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-gap: 0.5rem;
        align-items: center;
        margin: 0 0 0.5rem 0;
        background-color: white;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.082));
        transform: translate(-1px, -1px);
        transition: filter 0.2s, transform 0.2s;
    }

    .tarea button {
        width: 2em;
        height: 2em;
        border: none;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .tarea input {
        flex: 1;
        padding: 0.5em 2em 0.5em 0.8em;
        border-radius: 3px;
    }

    button.toggle {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        box-sizing: border-box;
        background-size: 1em auto;
    }

    .texto {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }

    .guardar {
        position: absolute;
        right: 0;
        opacity: 0;
        background-image: url("");
    }

    .tarea input:focus + .guardar, .guardar:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }

    .borrar {
        background-image: url("");
        opacity: 0.2;
    }
    .borrar:hover,
    .borrar:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }

/* TODO: Uncomment when the API endpoints are available
    .done {
        transform: none;
        opacity: 0.4;
        filter: drop-shadow(0px 0px 1px rgba(0,0,0,0.1))
    }

    .done .toggle {
        background-image: url("");
    }
 */
 </style>

<div class="tarea done">
    <form action="" method="">
        <input type="hidden" name="done" value="" />
        <button aria-label="Marca hecho/por hacer" class="toggle">Hecho/PorHacer</button>
    </form>

    <form action="" method="">
        <input type="text" name="text" aria-label="Añade una tarea" />
    </form>

    <form action="" method="" class="texto">
        <input type="hidden" name="done" value="" />
        <button aria-label="Guarda tarea" class="guardar"></button>
    </form>

    <form action="" method="">
        <button aria-label="Borra tarea" class="borrar"></button>
    </form>

</div>