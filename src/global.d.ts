/// <reference types="@sveltejs/kit" />

type Tarea = {
    created_at: Date;
    text: string;
    done: boolean;
}