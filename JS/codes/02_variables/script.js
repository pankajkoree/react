let username = "pankaj";
let x = "my name is ----"; //its not a good way to declare name of variable

let fname = "pankaj";
let lname = "kori";
let age = 23;
// lname = "singh"; // values can be reassigned

let userIntro = //camelcase varibable
  "Hi, my name is " +
  fname +
  " " +
  lname +
  " " +
  "And I'm " +
  age +
  " " +
  "years old.";

function let_fun() {
  let names = "ritik";
  console.log(names);
}

let_fun();
// console.log(names); // directyly accessing the function let variable, throws error as ReferenceError: names is not defined
// -------- End of let --------------

const hoursInDay = 24;

// hoursInDay = 5; TypeError: Assignment to constant variable.
const fruits = ["apple", "banana", "grapes", "melon"];
fruits[0] = "pineapple";

function const_use() {
  const ball = 6;
  console.log(ball);
}
const_use();
// console.log(ball); // directyly accessing the function const variable, throws error as ReferenceError: ball is not defined

//But if we reinitialize the same function const variable, it works perfectly fine
ball = 4;
console.log(ball);

// -------- End of const -----------
//1st difference from let is : let is block scoped but var isn't means, can be outside the block too
{
  var x1 = 3.0;
  console.log(x1);
}
x1 = 5;
console.log(x1);

//2nd difference is that, var value can be used before its initialization, means it doesn't throw the error, it gives undefined but let throws the error
console.log(animal);

var animal = "elephant";

// ---------- End of var -----------
// Rules for naming a variable
let _name = "pankaj";
let $name = "hello";

// --------- end of variable rule

// Naming convention
// 1. camelCase
let fruitsName = ["apple", "banana", "carrot"];
console.log(fruitsName);

// 2. snake_case
const color_name = ["red", "purple", "orange"];
console.log(color_name);

// 3. kebab-case
// let people-choice = ["ritik","ravi"]

// 4. PascalCase
const ZonalName = ["Lumbini", "Madhesh", "Paschim"];
console.log(ZonalName);
