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
  switch (num) {
    case 0 - 49:
      return `F Grade`;
    case 50 - 59:
      return "E Grade";
    case 60 - 69:
      return "D Grade";
    case 70 - 79:
      return "C Grade";
    case 80 - 89:
      return "B Grade";
    case 90 - 100:
      return "A Grade";
    default:
      return "Invalid number";
  }
};
