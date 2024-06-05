debugger;
const userName = "Ritik"; //both let and const goes in gloabl scope under script section and can't be accessed by window.varName
let useAge = 24;
var aesehi = 23; // declared with var, goes in Global under window and can be accessed using window.variable_name

function add() {
  //it goes under global windows section
  // variable declared inside the function can't be accessed outside
  const x = 5;
  const y = 7;
  console.log(x + y);
}

add();
// console.log(x); // thorws the error coz of its scope

console.log("program ended");
