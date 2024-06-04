// return keyword

function addTwo(a, b) {
  //   console.log(5 + 6); //it's not the result of the function

  //   return; //if we don't pass anything to the return or not use return keyword, functions result will be undefined
  return a + b;
}

// debugger;
const a = +prompt("enter the number a : ");
const b = +prompt("enter the number b : ");
const resAddTwo = addTwo(a, b);
