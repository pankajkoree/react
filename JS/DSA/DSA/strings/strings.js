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
