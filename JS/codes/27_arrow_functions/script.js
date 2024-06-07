// ------------Arrow functions------------------

// normal function
function square(num) {
  return num ** 2;
}

// anonymous function
const square1 = function (num) {
  return num ** 2;
};

// arrow function for square function
const squarefn = (num) => {
  // if we use only one parameter, it's not necessary to use bracket, but its better to use
  return num ** 2;
};

// when we have only one statement in arrow function i.e.
const sqfn = (num) => num ** 2; // implicit return means we don't use return keyword to return

// ------------**************--------------------

// add arrow funtions
const add = (num1, num2) => num1 + num2;

// ------------**************--------------------

// using anonymous arrow functions in setTimeout

setTimeout(() => {
  console.log("hii");
}, 1000);

// ------------**************--------------------

// generating a randow value from 1 to 10 using arrow functions
const randomVal = Math.floor(Math.random() * 10) + 1;

// from a specific range i.e. 20 to 30

const spRandomVal = () => {
  const min = 20;

  const randomVal1 = Math.floor(Math.random() * 10) + 1 + min;
  return randomVal1;
};
// ------------**************--------------------
