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
