// ----------some and every array methods-------------

// -------------------some------------------------
const evenNumbers = [0, 2, 41, 6, 8, 10];

// -----------------------------------------------------
// if any of the value from the times of array, results in true, the whole result will be true
// once it founds a value to be true, it stops its execution, means further it don't do further processing
// const someResult = evenNumbers.some((num, i, array) => {
//   return num > 4;
// });
// -----------------------------------------------------

// checking whether the array is perfect even or not

const isEven = evenNumbers.some((num) => {
  return num % 2 == 1;
});

// -----------------------------------------------------

// getting the index of the odd number present in the array
const oddNumber = evenNumbers.some((num, i) => {
  if (num % 2 == 1) {
    console.log(`odd number is present at index ${i + 1}`);
  }
  return num % 2 == 1;
}); // only returns the result of the 1st true item

// ------------------every--------------------

// every returns true if and only if all the items results in true -  exact opposite of the some
// it ends the execution, once it finds the false
// const everyResult = evenNumbers.every((num) => {
//   return num % 2 == 0;
// }); // results in true as every value is even for this array const evenNumbers = [0, 2, 4, 6, 8, 10];

// ---------------------------------------------

// changing the array
const everyResult1 = evenNumbers.every((num) => {
  debugger;
  return num % 2 == 0;
}); // returns false and ends the execution as it encounters the false result in the 3rd time

// --------------***************--------------------
