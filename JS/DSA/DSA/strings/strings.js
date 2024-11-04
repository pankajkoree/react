// strings

// problem 1: reverse the string

let originalString = "reversingthestring";
let reversedString = "";

function reverseString(originalString) {
  for (let i = originalString.length - 1; i >= 0; --i) {
    reversedString += originalString[i];
  }
  return reversedString;
}

console.log(reverseString(originalString));

// problem 2: checking the palindrome of the string

function stringPalindromeChecker(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(stringPalindromeChecker("apple"));
console.log(stringPalindromeChecker("eye"));
console.log(stringPalindromeChecker("dribble"));

// problem 3: reversing the integer

function reverseInteger(value) {
  let isNegative = value < 0;
  // absolute value of the negative number
  value = Math.abs(value);

  let reversedInteger = 0;
  while (value > 0) {
    let lastDigit = value % 10;
    reversedInteger = reversedInteger * 10 + lastDigit;
    value = Math.floor(value / 10);
  }
  if (isNegative) {
    return -reversedInteger;
  }
  return reversedInteger;
}

console.log(reverseInteger(-123));

// problem 4: palindrome of the number
function isPalindrome(value) {
  if (value < 0) {
    return false;
  }

  let originalValue = value;
  let palindromeValue = 0;

  while (value > 0) {
    let lastDigit = value % 10;
    palindromeValue = palindromeValue * 10 + lastDigit;
    value = Math.floor(value / 10);
  }
  return originalValue === palindromeValue;
}

console.log(isPalindrome(-123));
console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(124));

// problem 5: capitalize first letter of the word
function capitalizeFirstLetter(value) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resultArray = [];
  let result = "";

  function customPush(arr, value) {
    arr[arr.length] = value;
  }

  for (let i = 0; i < value.length; i++) {
    if (i === 0) {
      for (let j = 0; j < lowerCase.length; j++) {
        if (value[0] === lowerCase[j]) {
          customPush(resultArray, upperCase[j]);
          break;
        }
      }
    } else {
      customPush(resultArray, value[i]);
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    result += resultArray[i];
  }

  return result;
}

console.log(capitalizeFirstLetter("hello"));

// problem 5: capitalize first letter of each word in the sentence
function capitalizeFirstLetterOfWord(value) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resultArray = [];
  let result = "";

  function customPush(arr, value) {
    arr[arr.length] = value;
  }

  for (let i = 0; i < value.length; i++) {
    if (i === 0 || value[i - 1] === " ") {
      for (let j = 0; j < lowerCase.length; j++) {
        if (value[i] === lowerCase[j]) {
          customPush(resultArray, upperCase[j]);
          break;
        }
      }
    } else {
      customPush(resultArray, value[i]);
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    result += resultArray[i];
  }

  return result;
}

console.log(capitalizeFirstLetterOfWord("hello pankaj"));

// till n, fizz for divisible of 3, buzz for divisible of 5 and fizzbuzz for divisible of both 3 and 5
const fizzBuzz = (n) => {
  let resultArray = [];

  function customPush(arr, value) {
    arr[arr.length] = value;
  }
  for (let i = 1; i <= n; i++) {
    customPush(resultArray, i);
  }
  for (let i = 1; i <= n; i++) {
    if (resultArray[i] % 3 === 0 && resultArray[i] % 5 === 0) {
      resultArray[i] = "fizzbuzz";
    } else if (resultArray[i] % 3 === 0) {
      resultArray[i] = "fizz";
    } else if (resultArray[i] % 5 === 0) {
      resultArray[i] = "buzz";
    }
  }

  return resultArray;
};

console.log(fizzBuzz(20));
