import { ITask } from "../types/task";

export async function getAllTasks(): Promise<ITask[]> {
  const response = await fetch("http://localhost:5173/tasks");
  return await response.json();
}

export async function createTask(task: ITask): Promise<ITask> {
  const response = await fetch("http://localhost:5173/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return await response.json();
}

export async function deleteTask(id: string): Promise<void> {
  await fetch(`http://localhost:5173/tasks/${id}`, {
    method: "DELETE",
  });
}


