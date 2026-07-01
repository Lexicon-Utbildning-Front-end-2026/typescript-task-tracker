import type { Task, TaskPriority } from "./types.js";
import { app } from "./types.js"
import { renderTasks } from "./render.js"; 
import { loadTasks, saveTasks } from "./storage.js";
import { addTask, toggleTask, deleteTask } from "./tasks.js";
import { getTaskArray } from "./types.js";

const title = document.querySelector("#title") as HTMLHeadingElement;
title.textContent = "Mina Tasks";

export const taskInput = document.querySelector("#task-input") as HTMLInputElement;

export const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement;

const form = document.querySelector("#task-form") as HTMLFormElement;

const errorMessage = document.querySelector("#error-message") as HTMLParagraphElement;


form.addEventListener("submit", handleSubmit);


function handleSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    const priority = priorityInput.value as TaskPriority;

    const error = validateTaskName(taskName);

    if (error !== "") {
        errorMessage.textContent = error;
        return;
    }

    errorMessage.textContent = "";

    addTask(taskName, priority);
    renderTasks();
}


function validateTaskName(name: string): string {
    if (name === "") return "Task name is required"

    if (name.length < 3) {
        return "Task name must be at least 3 characters."
    }

    if (name.length > 40) {
        return "Task name cannot be longer than 40 characters."   
    }

    if (taskExists(name)) {
        return "Task name with that name already exists."
    }

    return "";
}


function taskExists(name: string): boolean {
    for (const task of getTaskArray()) {
        if (task.name.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    }

    return false;
}

loadTasks();
renderTasks();


