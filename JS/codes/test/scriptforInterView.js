// -----------------Interview Questions----------------------

// 1

// let array1 = [];
// let array2 = [];

// // both's output will  be false coz whenever we are comparing array, we don't compare its value, we compare its memory address

// console.log(array1 == array2);
// console.log(array1 === array2);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 2

// let array1 = [];
// let array2 = array1;

//output for both will be true coz copying an array into another variable copies the memory address too, so everything will be same, hence the answer will be true

// console.log(array1 == array2);
// console.log(array1 === array2);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 3

// let array1 = [20];
// let array2 = [20];

// // both will be true, 1st coz it compares the element of array which is same, so it will be true
// // 2nd will also be true, coz the type of both the array'value is Number so it will be true

// console.log(array1[0] == array2[0]);
// console.log(array1[0] === array2[0]);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 4

let array1 = [1, 2, 3, 4];
let object1 = { name: "anil" };

console.log(...array1); // its result will be normal string of array1
console.log(...object1); // this will throw the error as : TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
