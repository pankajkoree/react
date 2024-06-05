"use strict"; //prevents using those unvariablized variable which means variable don't have name
// debugger;
const userName = "Ritik"; //both let and const goes in gloabl scope under script section and can't be accessed by window.varName
let useAge = 24;
var aesehi = 23; // declared with var, goes in Global under window and can be accessed using window.variable_name

// function add() {
//   //it goes under global windows section
//   // variable declared inside the function can't be accessed outside
//   const x = 5;
//   const y = 7;
//   console.log(x + y);
// }
function subtract() {
  // debugger;
  const aa = 15;
  const ab = 18;
  const ac = 20;
  console.log(aa - ab);
  console.log(userName);

  function child() {
    // won't show it in memory execution phase if it's not being called or used
    const childName = "Chhotu";
    console.log(childName);
    console.log(ac);
    function grandChild() {
      const grandChildName = "ree";
      console.log(grandChildName);
    }
    // lexical scope means a function have access upto where or the area where it can be freely accessed
    grandChild();
    // console.log(grandChildName); throws the error when accessing the inside function items outside the functions
  }
  // block scope {}
  {
    let num1 = 23;
    console.log(num1);
    num2 = 45; // not declared with any type of variable means it is declared as global scope
    console.log(num2);
  }
  // block scope till here

  child();
}

// add();
subtract();
// console.log(x); // thorws the error coz of its scope
console.log(num2);
console.log("program ended");
