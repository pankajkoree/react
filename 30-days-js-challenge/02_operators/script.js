// task 1: program to add two numbers and log the result

const sumOfTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(`Addition of two Numbers : ${sumOfTwoNumbers(5, 6)}`);

// task 2: program to subtract two numbers and log the result

const diffOfTwoNumbers = (num1, num2) => {
  return num1 > num2 ? num1 - num2 : num2 - num1;
};

console.log(`Subtraction of two Numbers : ${diffOfTwoNumbers(4, 5)}`);
console.log(`Subtraction of two Numbers : ${diffOfTwoNumbers(7, 4)}`);

// task 3: program to multiply two numbers and log the result

const multiplyOfTwoNumbers = (num1, num2) => {
  return num1 * num2;
};

console.log(`Multiplication of two numbers : ${multiplyOfTwoNumbers(4, 7)}`);

// task 4: division of two numbers and log the result
const divideTwoNumbers = (num1, num2) => {
  return num2 == 0
    ? "Can't divide by zero"
    : `Division of two number : ${num1 / num2}`;
};

console.log(divideTwoNumbers(3, 0));
console.log(divideTwoNumbers(3, 2));
console.log(divideTwoNumbers(3, 4));

// task 5: remainder of number and log the result

const remainderOfNumber = (num1, num2) => {
  return num2 == 0 ? `The result is NaN` : `Remainder : ${num1 % num2}`;
};

console.log(remainderOfNumber(2, 0));
console.log(remainderOfNumber(2, 3));
console.log(remainderOfNumber(4, 3));

// task 6: use += operator to add number to variable and log the result

const plusEqualTo = (num1) => {
  let existingValue = 5;
  return `${existingValue} '+=' ${num1} : ${(existingValue += num1)}`;
};

console.log(plusEqualTo(4));

// task 7: use -= operator to subtract number to variable and log the result

const minusEqualTo = (num1) => {
  let existingValue = 5;
  return `${existingValue} '-=' ${num1} : ${(existingValue -= num1)}`;
};

console.log(minusEqualTo(4));

// task 8: comparision of two numbers using < and > and log the result

console.log(5 < 8);

console.log(5 > 8);

// task 9: comparision of two numbers using >= and <= and log the result

console.log(4 >= 4);

console.log(5 <= 4);

// task 10: comparision of two numbers using == and === and log the result

console.log(4 == 4);
console.log(4 === 4);

// task 11: program that uses && operator to combine two conditions and log the result

console.log(5 > 4 && 4 < 6);

// task 12: program that uses || operator to combine two conditions and log the result

console.log(4 > 5 || 5 < 4);

// task 13: program that uses ! operator to negate a condition and log the result

console.log(
  `the result of '5<4' is "${5 < 4}" and its negation value is "${!5 < 4}"`
);

// task 14: program that uses ternary operator of check if a numbers is positive or negative and log the result

const ternaryOperation = (num) => {
  return num === 0
    ? "0 is neither positive nor negative"
    : num > 0
    ? `${num} is positve`
    : `${num} is negative`;
};

console.log(ternaryOperation(0));
console.log(ternaryOperation(1));
console.log(ternaryOperation(-1));
