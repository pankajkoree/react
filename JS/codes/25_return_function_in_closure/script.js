// codes
// ---------------------------XXXXXXXXXXXX----------------
// Named function
// function outer() {
//   // it will form two closure i.e. one for outer function variable and one for parent function variable
//   const a = 5;
//   function parent() {
//     const b = 3; //normally this variable should have been deleted once its exeuction ends but as we are using it in inside function and returning that function it forms closure, so it remains somewhere in memory

//     //higher order functions means either it returns a function or take function as argumnets
//     function add() {
//       console.log(a + b);
//     }
//     return add;
//   }
//   return parent();
// }

// const add1 = outer();

// console.dir(add1);

// ---------------------------XXXXXXXXXXXX----------------

// anonymous function // everything same as upper code except the function add will be converted here into anonymous function
function outer() {
  const a = 5;
  function parent() {
    const b = 3;

    return function () {
      console.log(a + b);
    };
  }
  return parent();
}

const add1 = outer();

console.dir(add1);
