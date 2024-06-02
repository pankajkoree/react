// Shallow copy

// these two variable will have the same memory address
// const userName1 = "pk";
// let userName2 = userName1;

// changing the memory address by adding something in the variable
// userName2 = userName2 + " chaubey";

// creating an array
const fruits = ["Mango", "Apple", "Orange"];

// new array with the assignment of another array
const myFruits = fruits;

// pushing item into array - but shows weird behavior
myFruits.push("Dates");
myFruits.push("Grapes");

// the same behavior with objects
const user = {
  fname: "ritik",
  lname: "singh",
};

const user2 = user;
user2.lname = "chaubey";

user.fname = "Ajay"; // why in objects changing one makes changes in another too, coz it can be updated using . and [] notation but in case of string it's not possible which means updating in string means assigning a different value which creates another memory locations

// copying the object
const user3 = {};

Object.assign(user3, user); // it is used earlier but after ES6 new way come
user3.fname = "Lalit";

// using spread operator
const user4 = { ...user2 };
user4.fname = "ravi";

// array copying
const actor = ["Rajkumar", "Ritik", "Shahid"];
const actress = ["Rakul", "Reeti", "Nidhi"];

// const stars = [];
// Object.assign(stars, actress); not a good way so

// using spread operator
// const stars = [...actor];

// using concat()
// const stars = [].concat(actor);

// using slice()
const stars = actor.slice();

// Object inside object
const employee = {
  fname: "sunil",
  lname: "gawaskar",
  location: {
    state: "CG",
    pinCode: "84783",
  },
  subject: ["DAA", "CP"],
};

const dupsEmp = { ...employee }; //copies only the object, means memory address of copied object will be different but its inside element will still be of same address

// ------Shallow Copy End------------
// Deep copy
