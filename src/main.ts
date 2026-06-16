
const task1kName: string = "Learn TypeScript";
const task1Priority: number = 1;
const task1Completed: boolean = false;

const task2kName: string = "Walk the dog";
const task2Priority: number = 1;
const task2Completed: boolean = true;

const task3kName: string = "Cook dinner";
const task3Priority: number = 2;
const task3Completed: boolean = false;

const completedTasks: number = 1;
const totalTasks: number = 3;

const completionRate: number = completedTasks / totalTasks * 100;

console.log("========================");
console.log("TASK TRACKER!");
console.log("========================");

console.log(`
    Task: ${task1kName}
    Priority: ${task1Priority}
    Completed: ${task1Completed}
    `);

console.log(`
    Task: ${task2kName}
    Priority: ${task2Priority}
    Completed: ${task2Completed}
    `);

console.log(`
    Task: ${task3kName}
    Priority: ${task3Priority}
    Completed: ${task3Completed}
    `);

console.log(`Completed rate: ${completionRate}%`);