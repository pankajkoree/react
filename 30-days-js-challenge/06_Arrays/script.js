// task 1: Create an array of numbers from 1 to 5 and log to the console
console.log("<--------------task 1---------------->");
const array1 = [1, 2, 3, 4, 5];
const oneToFive = () => {
  return array1;
};
console.log(oneToFive());

// task 2: access the first and last element of the array and log them to the console

console.log("<--------------task 2---------------->");
console.log(`First element of array is ${array1[0]}`);
console.log(`Last element of array is ${array1[array1.length - 1]}`);

// task 3: use the push method to add a new number to the end of the array and log the updated array
console.log("<--------------task 3---------------->");
const pushElement = (element) => {
  array1.push(element);
  console.log(`The element to be pushed into array is ${element}`);
  return array1;
};
console.log(`The updated array is`, pushElement(7));

// task 4:use the pop method to remove the last element from the array and log the updated array
console.log("<--------------task 4---------------->");
const popElement = () => {
  array1.pop();
  return array1;
};
console.log(`The updated array is`, popElement());

// task 5: use the shift method to remove the first element from the array and log the updated array
console.log("<--------------task 5---------------->");

const shiftElement = () => {
  array1.shift();
  return array1;
};
console.log(`The updated array is`, shiftElement());

// task 6: use the unshift method to add a new number to the beginning of the array and log the updated array

console.log("<--------------task 6---------------->");
const unshiftElement = (element) => {
  array1.unshift(element);
  console.log(`The element to be unshifted is ${element}`);
  return array1;
};
console.log("The update array is ", unshiftElement(9));

// task 7: use the map method to create a new array where each number is doubled and log the new array
console.log("<--------------task 7---------------->");

const mappedArray = array1.map((element) => {
  return element * 2;
});
console.log("The array after using map is ", mappedArray);

// task 8: use the filter method to create a new array with only even numbers and log the new array
console.log("<--------------task 8---------------->");
const filteredArray = array1.filter((element) => {
  return element % 2 == 0;
});
console.log("The array after using filter is ", filteredArray);

// task 9: use the reduce method to calculate the sum of all numbers in the array and log the result
console.log("<--------------task 9---------------->");
const reducedArray = array1.reduce((acc, curr) => {
  return acc + curr;
}, 0);
