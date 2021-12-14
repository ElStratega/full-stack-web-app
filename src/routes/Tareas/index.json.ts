import type { RequestHandler } from "@sveltejs/kit";

//TODO Persist in database
let tareas: Tarea[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: tareas
    }
}

export const post: RequestHandler<{}, FormData> = (request)=> {
    tareas.push({
        created_at: new Date(),
        text: request.body.get("text"),
        done: false
    });

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}    