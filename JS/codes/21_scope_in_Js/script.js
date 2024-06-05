debugger;
const userName = "Ritik";
const useAge = 24;

function add() {
  // variable declared inside the function can't be accessed outside
  const x = 5;
  const y = 7;
  console.log(x + y);
}

add();
// console.log(x); // thorws the error coz of its scope

console.log("program ended");
