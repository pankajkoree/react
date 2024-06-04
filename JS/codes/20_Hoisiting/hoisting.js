// hoisting
debugger;
// in case of var, it doesn't throw any error
console.log(a);

var a = "pankaj";

// const a = "pk";  //in case of let and const, it throws an error as it is not defined

// functions are already hoisted in this way
hi(); // this function call will give the exact result as function, u might think why it gives result before the initialization, it's beacause at the time of memory creation, whole function is initialized
// function defintion as well as function declaration
function hi() {
  console.log("hello");
}

// another way of function
const fun = function () {
  //without giving name to the function known as anonymous function
  // called as function expression as well as function definition
  console.log("go");
};
