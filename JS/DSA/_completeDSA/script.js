// sum of all natural numbers from 1 to n
const sumNaturalNumbers = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return `Sum till ${n} is ${sum}`;
};
console.log(sumNaturalNumbers(50));

// sum of all digits in number
const sumDigits = (n) => {
  let nArray = String(n).split("");
  let sum = 0;
  nArray.forEach((element) => {
    element = Number(element);
    sum += element;
  });
  return `Sum of all digits in ${n} is ${sum}`;
};
console.log(sumDigits(1287));

// count the digits of a number
const countDigits = (n) => {
  let countArray = String(n).split("");
  return countArray.length;
};
console.log(countDigits(34252));

// palindrome number
var palindromeNumber = function (x) {
  let originalNumber = x;
  let reversedNumber = 0;
  while (originalNumber > 0) {
    let remainder = originalNumber % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    originalNumber = Math.floor(originalNumber / 10);
  }
  return x === reversedNumber;
};
console.log(palindromeNumber(121));

// fibonacci number using simple loop if don't know recursion
var fibonacciNumber = function (n) {
  // without recursion
  if (n < 2) {
    return n;
  }
  let previous = 0,
    current = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = previous + current;
    previous = current;
    current = next;
  }
  return next;
};
console.log(fibonacciNumber(5));

// missing number
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
};
console.log(missingNumber([3, 0, 1]));

// find element in array
const findElement = (arr, target) => {
  for (let i of arr) {
    if (i === target) {
      return true;
    }
  }
  return false;
};
console.log(findElement([45, 76, 89, 23, 66, 90], 23));
console.log(findElement("elephant", "h"));

// find element Index
const findElementIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
console.log(findElementIndex([45, 76, 89, 23, 66, 90], 23));
console.log(findElementIndex("elephant", "h"));

console.log("elephant".indexOf("a")); // this line is the prebuilt method of above code

console.log([3, 4, 6, 8, 9].splice(2, 2)); // splice -> 1st parameter = position,2nd = count

const isArrayEqual = (arr1, arr2) => {
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     return false;
  //   }
  // }
  // return true;

  // another method
  return (
    arr1.length === arr2.length &&
    arr1.every((element, i) => arr1[i] === arr2[i])
  );
};

console.log(isArrayEqual([2, 3, 4], [2, 6]));
console.log(isArrayEqual([1, 2, 3], [1, 2, 4]));
console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));

// sorting number in ascending order
const arrayToSort = [3, 6, 1, -6, 4];
console.log(arrayToSort.sort()); // ascending order
console.log(arrayToSort.sort((a, b) => b - a)); // desending order

// reversing the array
const arrayToReverse = [3, 6, 1, -6, 4];
console.log(arrayToReverse.reverse());

// without using built in functions
const arrayToReverse2 = [3, 6, 1, -6, 4];
const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};
console.log(reverseArray(arrayToReverse2));
