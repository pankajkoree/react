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
