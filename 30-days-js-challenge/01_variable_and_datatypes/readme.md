# 30 Days JS Challenge - Day 1

## Topic : Variable and Data types

### solution code

### script.js

```js
// task 1: to declare a variable using var and assign it a number, then  console it.

var numberVariableUsingVar = 9;

console.log(numberVariableUsingVar);

// task 2: to declare a variable using let and assign it a string, then  console it.

let stringUsingLet = "30 days JS challenge";

console.log(stringUsingLet);

// task 3:  to declare a variable using const and assign it a boolean value, then  console it.

const booleanUsingConst = true;

console.log(booleanUsingConst);

// task 4: create variable of different data types (number, string, boolean, object, array) and log each variables type using typeof operator

const numberVariable = 1;
const stringVariable = "Mr. hitesh";
const booleanVariable = false;
const objectVariable = {
  number: 1,
  string: "js",
  boolean: true,
  objectVariable2: {
    purpose: "practice",
    lang: "js",
  },
};

const arrayVariableUsername = ["endless_code", "abdul_wajeed", "JayeshHire"];

console.log(typeof numberVariable);
console.log(typeof stringVariable);
console.log(typeof booleanVariable);
console.log(typeof objectVariable);
console.log(typeof arrayVariableUsername);

// task 5: decalre variable using let, assign it an initial value, and reassign it a new value and log both the values

let letVariable = "initial value";
console.log(`Inital value for let variable is "${letVariable}"`);
letVariable = "reassigning the value to let";
console.log(`Reassigned value for let variable is "${letVariable}"`);

// task 6: try reassigning the value to const, and observer the error

const constVariable = "before reassigning the value to const";
console.log(constVariable);
constVariable = "after reassigning the value to const";
console.log(constVariable); // reassigning the value to const throws an error as : TypeError - assignment to const variable
```


### conclusion
```text
30 days JS challenge
although this was an easy task but as we know Mr. hitesh sir, there would be intersting things to learn
so having hope high, i've challenged myself to finish this 30 day challenge

what i remembered again that :
although each and every task was too easy.
in the last case of const re-assignment, i didn't used to remember the eact error whats its saying, what i used to remember is that it throws a typeError and re-assignment isn't possible in case of constant(const) i used to avoid that exact message what it says.
```