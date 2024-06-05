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
  debugger;
  const aa = 15;
  const ab = 18;
  console.log(aa - ab);
  console.log(userName);

  function child() {
    const childName = "Chhotu";
    console.log(childName);
  }
}

// add();
subtract();
// console.log(x); // thorws the error coz of its scope

console.log("program ended");
