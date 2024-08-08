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