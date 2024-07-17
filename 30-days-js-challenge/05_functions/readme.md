# 30 Days JS Challenge - Day 5

## Topic : Functions

### Solution Code

### script.js

```js
// task 1: function to check if a number is even or odd and log the result.
console.log("<-------------task 1----------------->");
function evenOrOdd(num) {
  return `${num} is ${num % 2 == 0 ? "Even" : "Odd"}`;
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(1));

// task 2: function to calculate the square of a number and log the result
console.log("<-------------task 2----------------->");
function squareOfNumber(num) {
  return `Square of ${num} is ${num ** 2}`;
}

console.log(squareOfNumber(5));

// task 3: function expression to find the maximum of two numbers and log the result
console.log("<-------------task 3----------------->");
const maximumOfTwo = function (num1, num2) {
  return num1 > num2
    ? `Maximum is ${num1} among ${num1} and ${num2}`
    : `Maximum is ${num2} among ${num1} and ${num2}`;
};
console.log(maximumOfTwo(3, 5));
console.log(maximumOfTwo(7, 3));

// task 4: function expression to concatenate two strings and return the result
console.log("<-------------task 4----------------->");
const concatenateStrings = function (string1, string2) {
  return `Concatenation of two string i.e. ${string1} and ${string2} is ${
    string1 + string2
  }`;
};
console.log(concatenateStrings("Js", "challenge"));

// task 5: an arrow functions to calculate the sum of two numbers and return the result
console.log("<-------------task 5----------------->");
const sumOfTwo = (num1, num2) => {
  return `Sum of ${num1} and ${num2} is ${num1 + num2}`;
};
console.log(sumOfTwo(4, 7));

// task 6: an arrow function to check if a string contains a specific character and return boolean value
console.log("<-------------task 6----------------->");
const doesSpecificCharacterExist = (string, character) => {
  return string.includes(character);
};
console.log(doesSpecificCharacterExist("javascript", "t"));
console.log(doesSpecificCharacterExist("javascript", "y"));

// task 7: function that takes two parameter and returns their product. Provide a default value for the second parameter
console.log("<-------------task 7----------------->");
function productOfTwo(num1, num2 = 2) {
  return `Product of two numbers i.e. ${num1} and ${num2} is ${num1 * num2}`;
}
console.log(productOfTwo(3, 5));
console.log(productOfTwo(5));

// task 8: function that takes a person's name and age and returns a greeting message. Provide a default for the age.
console.log("<-------------task 8----------------->");
function greetingMessage(name, age = 18) {
  return `Hello, my name is ${name} and I'm ${age} years old`;
}
console.log(greetingMessage("Shankar", 34));
console.log(greetingMessage("Shankar Tripathi"));

// task 9: higher order function that takes a function and a number and calls the function that many times
console.log("<-------------task 9----------------->");
function normalFunction(num = 1) {
  console.log(`Hi, its a normal function ${num}`);
}

function higherOrderFunctions(normalFunction, num) {
  console.log("Higher Order Function");
  for (let i = 1; i <= num; i++) {
    normalFunction(i);
  }
  return;
}
higherOrderFunctions(normalFunction, 5);

// higher order functions that takes two parameters and a value, applies the first function to the value, and then second function to the result
console.log("<-------------task 10----------------->");
function firstFunction(num1, num2) {
  return num1 / num2;
}

function secondFunction(num1, num2) {
  return num1 % num2;
}
function hofWithTwoFun(firstFunction, secondFunction, num) {
  let fn1 = firstFunction(10, num);
  return secondFunction(fn1, 3);
}
console.log(hofWithTwoFun(firstFunction, secondFunction, 5));
```
