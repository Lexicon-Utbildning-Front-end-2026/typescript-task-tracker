console.log("Dag 3");


const name = "John";

// === -> lika med
// == -> lika med
// !== -> inte like med
// > -> större än
// < -> mindre än
// >= -> lika med eller större än
// <= -> lika med eller mindre än

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log("tre" === "tre");
// console.log("tre" === 3);
console.log(5 !== 5);

// If-satser

const completed = false;

if (completed) {
    console.log("Uppgiftern är slutförd");
}

// const age = 15;

// if (age >= 18) {
//     console.log("Vuxen");
// }

// if (age < 18) {
//     console.log("Barn");
// }

// if (age >= 18) {
//     console.log("Vuxen");
// } else {
//     console.log("Barn");
// }

const score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

// && -> AND
// || -> OR


// LOGISKA OPERATORER
const age = 20;
const hasTicket = false;

if (age >= 18) {
    if (hasTicket) {
        console.log("Välkommen");
    }
}

if (age >= 18 && hasTicket)  {
    console.log("Välkommen");
}

if (age >= 18 || hasTicket) {
    console.log("Välkommen");
}

const completed2 = false;

if (!completed2) {
    console.log("Inte klar");
}


// SWITCH

const dayOfWeek:number = 4;

switch (dayOfWeek) {
    case 1:
        console.log("Måndag");
        break;
    case 2:
        console.log("Tisdag");
        break;
    case 3:
        console.log("Onsdag");
        break;
    default:
        console.log("Ogiltig dag")
}


// Array

const tast1 = "Lära oss TS"
const task2 = "Träna"
const task3 = "Handla"
const task4 = "Tvätta"

const tasks = [
    "Lära oss TS",
    "Träna",
    "Handla",
    "Tvätta",
    "Gå ut med hunden",
    "kolla tv",
    "borsta tänderna"
];

console.log(tasks);

console.log(tasks[0]);
console.log(tasks[1]);

console.log(tasks.length);

console.log(tasks[tasks.length - 1]);

tasks.push("Diska")
console.log(tasks);

const justDone = tasks.pop();
console.log(justDone);
console.log(tasks);


// Loopar

// console.log(tasks[0])
// console.log(tasks[1])
// console.log(tasks[2])
// console.log(tasks[3])
// console.log(tasks[4])

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
}

console.log("-----");

for (const task of tasks) {
    console.log(task);
}