console.log("task 1");
console.log("task 2");
console.log("task 3");
console.log("task 4");

//For-loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While-loop

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// while (gameIsRunning) {

// }

// Do...while

let j = 0;

do {
    console.log(j);
    j++;
} while (j < 5);


console.log("-------");

let k = 10;

while (k < 10) {
    console.log(k);
}

do {
    console.log(k);
} while (k < 10);

// forEach

// const tasks = [
//     "TypeScript",
//     "CSS",
//     "HTML"
// ];

// for (const task of tasks) {
//     console.log(task);
// }


// tasks.forEach(function (task) {
//     console.log(task);
// });

//
// Ternary operator

const age = 20;

if (age >= 18) {
    console.log("Vuxen");
} else {
    console.log("Barn");
}

const message = age >= 18 ? "Vuxen" : "Barn";

console.log(message);

/////////////////////

// Funktioner

const tasks = [
    "Lära mig TypeScript",
    "Träna",
    "Handla"
];

console.log("TASK TRACKER");

for (const task of tasks) {
    console.log(task);
}

console.log(`Antal uppgifter: ${tasks.length}`);

console.log("Hejdå");
console.log("Hejdå");
console.log("Hejdå");
console.log("Hejdå");
console.log("Hejdå");


function sayHello(name: string, age: number): void {
    console.log(`Hej ${name}. Du är ${age} år gammal.`);
}

sayHello("Robert", 34);
sayHello("Per", 25);
sayHello("Greta", 19);


function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 3);

console.log(result);


function getFullName(firstName : string, lastName = "Andersson"):string {
    return `${firstName} ${lastName}`
}

const fullName = getFullName("Robert");

console.log(fullName);



const taskList = [
    "TS",
    "CSS",
    "HTML"
]

function showTask() {
    for (const task of taskList) {
        console.log(task);
    }
}

showTask();

showTask();

function checkAge(age: number) {
    if (age >= 18) {
        console.log("Vuxen");
    } else {
        console.log("Barn");
    }
}

checkAge(23);


// Arrow functions

function greetOld(name: string): void {
    console.log(`Hej ${name}`);
}


const greetArrow = (name: string): void => {
    console.log(`hej ${name}`);
}

function addNumbers(a: number, b: number): number {
    return a + b;
}

const addArrow = (a: number, b: number): number => {
    return a + b;
}


const addArrow2 = (a: number, b: number): number => a + b;


console.log(addArrow(1, 2));
console.log(addArrow2(7, 2));

