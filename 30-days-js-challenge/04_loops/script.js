// task 1: program to print numbers from 1 to 10 using for loop
console.log("<-----------------task 1----------------->");
const oneToTen = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};

oneToTen();

// task 2: program to print the multiplication table of 5 using a for loop
console.log("<-----------------task 2----------------->");
const multipleOfFive = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
  }
};

multipleOfFive();

// task 3: program to calculate the sum of numbers from 1 to 10 using a while loop
console.log("<-----------------task 3----------------->");
const sumOfNumbers = () => {
  let i = 1;
  let sum = 0;
  while (i <= 10) {
    sum += i;
    i++;
  }
  return `Sum of numners from 1 to 10 is ${sum}`;
};

console.log(sumOfNumbers());
console.log("<-----------------task 4----------------->");
// task 4: program to print numbers from 10 to 1 using a while loop

const tenToOne = () => {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
};

tenToOne();
console.log("<-----------------task 5----------------->");
// task 5: program to print numbers from 1 to 5 using do...while loop

const oneToFive = () => {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
};
oneToFive();

console.log("<-----------------task 6----------------->");

// task 6: program to calculate factorial of number using do...while loop

const factorialOfNumber = (num) => {
  let factorial = 1;
  i = 1;
  if (num > 0) {
    if (num == 0 || num == 1) {
      return `Factorial of ${num} is ${factorial}`;
    } else {
      do {
        factorial = factorial * i;
        i++;
      } while (i <= num);
    }
  }
  return `Factorial of ${num} is ${factorial}`;
};

console.log(factorialOfNumber(5));

console.log("<-----------------task 7----------------->");
// task 7: program to print a pattern using nested for loops
// *
// * *
// * * *
// * * * *
// * * * * *

const patterns = (num) => {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*\t";
    }
    console.log(pattern);
  }
};
patterns(5);
