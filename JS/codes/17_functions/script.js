// creating a function
function introduction() {
  console.log("hi");
  console.log("whats the name");
}

console.log("***********");

// calling a function
introduction();

// creating a reusable intro function
const greetingName = prompt("enter the name : ");

function intro(greetingName) {
  console.log(`Welcome to the coding world, Mr ${greetingName}`);
  return `Thank you Mr ${greetingName}`;
}

const res = intro(greetingName);
