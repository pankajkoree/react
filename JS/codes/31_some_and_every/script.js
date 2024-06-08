// ----------some and every array methods-------------

const evenNumbers = [0, 2, 3, 4, 6, 8, 10];

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

// --------------***************--------------------
