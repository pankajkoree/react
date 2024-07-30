// importing modules for task 1
import { addTwo } from "./task1.js";

console.log(addTwo(3, 4));

// importing modules for task 2

import { person } from "./task2.js";

console.log(person);

// importing task 3 named modules
import { subtract, multiply } from "./task3.js";

console.log(subtract(4, 6));
console.log(multiply(6, 7));

// importing task 4 default export
import divide from "./task4.js";
console.log(divide(7, 8));

// importing task 5
import * as t5object from "./task5.js";

console.log(t5object.a);

// // importing loadsh modules for task 6
// const _ = require('lodash');

// const arr = [1, 2, 3];
// const doubled = _.map(arr, x => x * 2);
// console.log(doubled);

const arr = [1, 2, 3];
const doubled = _.map(arr, (x) => x * 2);
console.log(doubled);

// Define the URL you want to fetch data from
const url = "https://dummyjson.com/posts";

// Fetch data using Axios
axios
  .get(url)
  .then((response) => {
    // Handle success
    console.log("Data fetched successfully:", response.data);
  })
  .catch((error) => {
    // Handle error
    console.error("Error fetching data:", error);
  });
