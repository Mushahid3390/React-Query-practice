export interface Task {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export const fetchTasks = async () : Promise<Task[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    if (!res.ok){
        throw new Error("Failed To fetch tasks");
    }

    return res.json();
};