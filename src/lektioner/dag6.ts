
// type Task = {
//     name: string;
//     completed: boolean;
//     priority: number;
// }

// const task: Task = {
//     name: "Lära mig TS",
//     completed: false,
//     priority: 1
// };

// const task2: Task = {
//     name: "Diska",
//     completed: false,
//     priority: 2
// }


// const tasks: Task[] = [];

// tasks.push({
//     name: "Träna",
//     completed: false,
//     priority: 1
// })

// function showTask(task: Task): void {
//     console.log(task.name);
// }

// showTask(task2);



// type Username = string;

// const user: Username = "Peter";


// type Age = number;

// Vanliga misstag
// missade ;
// type Task2 = {
//     name: string
// };

// const task3 = Task;

// const task4: Task = {
//     name: "Träna"
// }


// type Task = {
//     name: string;
//     status: string;
//     priority: number;
// };

// const tasks: Task[] = [];

// function addTask(task: Task): void {
//     tasks.push(task);
// }

// addTask({
//     name: "Träna",
//     status: "Pending",
//     priority: 1
// });

// Union Types

// let status = "pending";
// status = "completed";
// status = "done";
// status = "pizza";
// status = "banan";

// let value: string | number;
// value = "hej";
// value = 42;
// value = true;

// type Id = string | number;

// const userId: Id = 123;
// const adminId: Id = "admin";




// let status: string;

// "pending"
// "completed"
// "pizza"
// "hej"

// let taskStatus: Status;

// taskStatus = "pending";
// taskStatus = "completed";
// taskStatus = "done";

//type Status = "pending" | "completed";

//type Priority = "low" | "medium" | "high";

// type Task = {
//     name: string;
//     status: "pending" | "completed";
//     priority: "low" | "medium" | "high"
// };

// const task1: Task  = {
//     name: "Träna",
//     status: "pending",
//     priority: "low"
// }

// function updateStatus(status: "pending" | "completed"): void {
//     console.log(status);
// }

// updateStatus("pending");
// updateStatus("done");


// type Task = {
//     name: string;
//     completed: boolean;
// };

// interface Task2 {
//     name: string;
//     completed: boolean;
// }


// interface User {
//     name: string;
//     age: number;
// }

// const user: User = {
//     name: "Peter",
//     age: 40
// };

// interface Task {
//     name: string;
//     completed: boolean;

//     toggle(): void;
// }

// const task: Task = {
//     name: "Träna",
//     completed: false,

//     toggle() {
//         this.completed = !this.completed;
//     }
// };


// interface Person {
//     name: string;
// }

// interface ContactInfo {
//     email: string;
// }

// interface Student extends Person, ContactInfo {
//     course: string;
// }


// const student1: Student = {
//     name: "Anna",
//     course: "Frontend",
//     email: "email@gmail.com"
// }


// interface BaseTask {
//     name: string;
// }

// interface Task extends BaseTask {
//     status: "pending" | "completed";
// }

// interface TimedTask extends Task {
//     dueDate: string;
// }


// type Person = {
//     name: string;
// }

// type Contact = {
//     email: string;
// }

// type User = Person & Contact;

// const user: User = {
//     name: "Peter",
//     email: "email@gmail.com"
// }


// interface Student extends Person {
//     course: string;
// }

// type Student = Person & {
//     course: string;
// }

// interface Task {
//     name: string;
//     status: "pending" | "completed";

//     toggle(): void;
// }

// interface TimedTask extends Task {
//     dueDate: string;
// }

// const task1: TimedTask = {
//     name: "Lämna in uppgift",
//     status: "pending",
//     dueDate: "2026-06-30",

//     toggle() {
//         this.status = "completed";
//     }
// }


interface User {
    name: string;
}

// interface User {
//     age: number;
// }


// function add(a: number, b: number): void {
//     // return a + b;
//     console.log(a + b);
// }

// // console.log(add(5, 10));

// const result = add(3, 5);
// console.log(result);

// type Task = {
//     name: string;
//     status: "pending" | "completed";
// }

// const task1: Task = {
//     name: "test",
//     status: 3
// }

// function showTask(task: Task): void {
//     console.log(task.name);
// }

// function createTask(name: string): Task {
//     return {
//         name,
//         status: "pending"
//     };
// }


// type Task = {
//     name: string;
//     status: "pending" | "completed";

//     toggle: () => void;
// }

// const task: Task = {
//     name: "Träna",
//     status: "pending",

//     toggle() {
//         this.status = this.status === "pending" ? "completed" : "pending";
//     }
// }

// User.login()
// cart.addItem()
// form.submit()


// type Status = "pending" | "completed";

// enum Status {
//     Pending = 10,
//     Completed = 20
// }

// const status = Status.Pending;

// console.log(Status.Completed);

enum Direction {
    North,  // 0
    South,  // 1
    East,   // 2
    West    // 3
}

enum UserRoles {
    Admin,
    Teacher,
    Student
}

// console.log(Direction.East);

enum Status {
    Pending = "pending",
    Completed = "completed"
}

// type Status = "pending" | "completed";

enum PermissionLevel {
    Guest = 0,
    User = 1,
    Admin = 2
}

enum ErrorCode {
    NotFound = 404,
    ServerError = 500
}

type Task = {
    name: string;
    status: Status;
}

const task1: Task = {
    name: "Träna",
    status: Status.Pending
};

interface newTask extends Task {
    test: string;
}

// const test: newTask = {

// }


interface User {
    name: string;
    task: Task;
}