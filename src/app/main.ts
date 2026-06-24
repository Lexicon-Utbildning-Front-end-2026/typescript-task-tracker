type Status = "pending" | "in-progress" | "completed";

type Task = {
  listId: number;
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: Date;
};

type TaskList = {
  id: number;
  name: string;
  createdAt: Date;
};

type HTMLElementOrNull = HTMLLIElement | HTMLDivElement | null;

const tasks: Task[] = [];
const taskLists: TaskList[] = [];

const app: HTMLDivElement = document.getElementById("app") as HTMLDivElement;

let incrementedTaskId: number = 0;
let incrementedListId: number = 0;

function createTaskList(name: string): void {
  const taskList: TaskList = {
    id: ++incrementedListId,
    name,
    createdAt: new Date(),
  };
  taskLists.push(taskList);
  console.log(`Task list "${taskList.name}" created with ID: ${taskList.id}`);

  renderTasks();
}

function createTask(title: string, description: string, listId = 0): void {
  const task: Task = {
    listId,
    id: ++incrementedTaskId,
    title,
    description,
    status: "pending",
    createdAt: new Date(),
  };

  tasks.push(task);
  console.log(
    `Task "${task.title}" created with ID: ${task.id} in list ID: ${task.listId}`,
  );

  renderTasks();
}

function renderTasks(): void {
  app.innerHTML = ""; // Clear the app container before rendering
  taskLists.forEach((taskList: TaskList) => {
    const taskListElement: HTMLUListElement = renderList(taskList);
    const relatedTasks: Task[] = tasks.filter(
      (task) => task.listId === taskList.id,
    );

    relatedTasks.forEach((task: Task) => {
      renderRelatedTask(task, taskListElement);
    });

    app.appendChild(taskListElement);
  });
}

function renderList(taskList: TaskList): HTMLUListElement {
  const taskListElement: HTMLUListElement = document.createElement("ul");
  taskListElement.setAttribute("data-list-id", taskList.id.toString());
  taskListElement.classList.add("task-list"); // Add class for styling

  const listHeader: HTMLHeadingElement = document.createElement("h2");
  listHeader.textContent = taskList.name;
  taskListElement.appendChild(listHeader);

  console.log(`Rendering task list "${taskList.name}" with ID: ${taskList.id}`);
  return taskListElement;
}

function renderRelatedTask(
  relatedTask: Task,
  taskListElement: HTMLUListElement,
): void {
  const entryElement: HTMLLIElement = document.createElement("li");
  entryElement.classList.add("task"); // Add class for styling

  const titleElement: HTMLHeadingElement = document.createElement("h3");
  titleElement.textContent = relatedTask.title;

  const descriptionElement: HTMLParagraphElement = document.createElement("p");
  descriptionElement.textContent = relatedTask.description;

  const statusElement: HTMLSpanElement = document.createElement("span");
  statusElement.textContent = relatedTask.status;

  entryElement.append(titleElement, descriptionElement, statusElement);

  taskListElement.append(entryElement);
  console.log(
    `Task "${relatedTask.title}" added to list "${taskListElement.getAttribute("data-list-id")}"`,
  );
}

// Example usage
createTaskList("Work");
createTaskList("Personal");

createTask("Finish report", "Complete the quarterly report", 1);
createTask("Buy groceries", "Milk, eggs, bread", 2);
