// execution context in Global

// debugger;
// console.log(firstName);

// var firstName = "Akash";
// let lastName = "Singh";
// let age = 23;
// const yearOfBirth = 2000;

// let userIntro = "Hi, my name is " + firstName + " " + lastName;
// debugger;
test(); //calling the function before , doesn't throw error if it's initialized
const userName = "pankaj"; // at first this line, it creates a memory for the variable userName and initialize the value as undefined
console.log(userName);

// funtion execution context - it gets initialized at the time of memory creation
function test() {
  const a = 14; // for the function, it creates its own local execution context
  const b = 12;
  console.log(a, b);
}
