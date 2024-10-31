// shallow copy vs deep copy

// shallow copy
let originalArray = [];
for (let i = 0; i < 10; ++i) {
  originalArray[i] = i + 1;
}
console.log(originalArray);

let copyArray = [];
copyArray = originalArray;

console.log(copyArray);

originalArray[10] = 11;
console.log(copyArray);

// deep copy
function deepCopy(array1, array2) {
  for (let i = 0; i < array1.length; ++i) {
    array2[i] = array1[i];
  }
}
let prevArray = [];
for (let i = 0; i < 100; ++i) {
  prevArray[i] = i + 1;
}
console.log(prevArray);

let nextArray = [];

deepCopy(prevArray, nextArray);

console.log(prevArray[0]);
console.log(nextArray[0]);

prevArray[0] = 300;
console.log(nextArray[0]);
