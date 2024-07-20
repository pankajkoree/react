# 30 Days JS Challenge

## Topic : ES6+ Features

### Solution Code

### script.js

```js
// task 1: use the template literals to create a string that includes variables for a person's name and age, and log the string to the console
console.log("<-------------task 1----------------->");
const literalsString = (name, age) => {
  return `Person's name is ${name} and age is ${age}`;
};
console.log(literalsString("subhankar", 36));

// task 2: create a multiline string using template literals and log it

console.log("<-------------task 2----------------->");
const greeting = (name, age, location) => {
  return ` Hello, my name is ${name}
    and i'm ${age} years old
    and my hometown is ${location}
    `;
};
console.log(greeting("Ritik", 29, "Lucknow"));

// task 3: use array destructring to extract the first and second elements from an array of numbers and log them
console.log("<-------------task 3----------------->");
// const arrayElementsCars = [
//   "Mahindra Thar",
//   "Audi Q5",
//   "Porsche Macan Ev",
//   "BMW 5",
//   "Chevrolet Silverado",
// ];

const numbersArray = [201, 202, 203, 204, 205, 206];

const [first, second] = numbersArray;

console.log(`First element is ${first} and second element is ${second}`);

// task 4: use the object destructuring to extract the title and author from a book object and log them
console.log("<-------------task 4----------------->");
const book = {
  title: "Physics",
  author: "KD Raman",
  year: "1989",
};

const { title, author } = book;
console.log(`The book's title is ${title} and the author name is ${author}`);

// task 5: use the spread operators to create a new array that includes all elements of an existing array plus additional elements, log the new array
console.log("<-------------task 5----------------->");

const newNumbersArray = [...numbersArray, 301, 302, 303];

console.log("New array is ", newNumbersArray);

// task 6: use the rest operator in a function to accept an arbitary number of arguments, sum them and return the result
console.log("<-------------task 6----------------->");

const usingRestOperator = ([first2, second2, ...rest] = numbersArray) => {
  let sum = 0;
  rest.forEach((el) => {
    sum += el;
  });
  console.log("First  = ", first2);
  console.log("Second = ", second2);

  return first2 + second2 + sum;
};
console.log(usingRestOperator(numbersArray));

// task 7: function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter
console.log("<-------------task 7----------------->");
const productFunction = (num1, num2 = 1) => {
  return num1 * num2;
};
console.log(productFunction(4, 5));
console.log(productFunction(7));

// task 8: use the enhanced object literals to create an object with methods and properties and log the object
console.log("<-------------task 8----------------->");
const objectLiterals = {
  firstName: "Rishi",
  lastName: "Kapoor",
  age: 28,
  fullName(firstName, lastName) {
    return `Fullname : ${firstName} ${lastName}`;
  },
};

console.log(objectLiterals);
console.log(
  objectLiterals.fullName(objectLiterals.firstName, objectLiterals.lastName)
);

// task 9: create an object with computed property based on variables and log the object
console.log("<-------------task 9----------------->");
const firstName = "Rohit";
const lastName = "Khanna";
const age = 29;

// object with computer property
const computedObject = {
  firstName,
  lastName,
  age,
};

console.log(computedObject);
```