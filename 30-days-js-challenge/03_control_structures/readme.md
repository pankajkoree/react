# 30 Days JS Challenge - Day 3

## Topic : Control Structures

### Solution Code:

### script.js

```js
// task 1: program to check if a number is positive, negative or zero, and log the result

const checkNumber = (num) => {
  if (num === 0) {
    return `${num} is neither positive nor negative`;
  }
  if (num < 0) {
    return `${num} is negative`;
  } else {
    return `${num} is positive`;
  }
};

console.log(checkNumber(0));
console.log(checkNumber(2));
console.log(checkNumber(-3));

// task 2: program to check if a person is eligible to vote and log the result

const isVoteable = (age) => {
  if (age > 0) {
    if (age >= 18) {
      return `You can vote as your age is ${age}`;
    } else {
      return `Sorry, you can't vote, the age should be equal or greater than 18 but you are just ${age}`;
    }
  } else {
    return `Age is less than zero and it's not possible.`;
  }
};

console.log(isVoteable(-2));
console.log(isVoteable(19));
console.log(isVoteable(17));

// task 3: program to find the largest of three numbers.

const largestOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3)
    return `${num1} is greater than ${num2} and ${num3}`;
  else if (num2 > num1 && num2 > num3)
    return `${num2} is greater than ${num1} and ${num3}`;
  else return `${num3} is greater than ${num1} and ${num2}`;
};

console.log(largestOfThree(15, 16, 17));
console.log(largestOfThree(18, 16, 17));
console.log(largestOfThree(18, 19, 17));

// task 4: program to determina the day of week based on number using switch case and log the result

const dayOfWeek = (num) => {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid";
  }
};

console.log(dayOfWeek(0));
console.log(dayOfWeek(5));

// task 5: program that uses switch case to assign the grade ("A","B","C","D","E") based on score and log the result

const grade = (num) => {
  switch (true) {
    case num <= 49:
      return `F Grade`;
    case num <= 59:
      return "E Grade";
    case num <= 69:
      return "D Grade";
    case num <= 79:
      return "C Grade";
    case num <= 89:
      return "B Grade";
    case num <= 100:
      return "A Grade";
    default:
      return "Invalid number";
  }
};

console.log(grade(100));
console.log(grade(49));

// task 6: program to use the ternary operator to check if number is even or odd and log the result

const evenOrOdd = (num) => `${num} is ${num % 2 == 0 ? "Even" : "Odd"}`;

console.log(evenOrOdd(-4));
console.log(evenOrOdd(8));
console.log(evenOrOdd(5));

// task 7: program to check if a year is leap and log the result
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} isn't a leap year`;
  }
};

console.log(isLeapYear(2000));
console.log(isLeapYear(1700));
console.log(isLeapYear(2024));
console.log(isLeapYear(1921));
```
