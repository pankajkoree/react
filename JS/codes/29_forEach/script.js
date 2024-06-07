// --------------for Each -----------------------

const bikes = ["ducati", "fz", "BMW", "R15", "KTM", "DUKE", "BULLET"];
// ------------------------------------------------
// for of loops
// for (const bike of bikes) {
//   console.log(bike);
// }
// ------------------------------------------------

// ------------------------------------------------
// using the for each
// bikes.forEach(function (bike) {  //passing anonymous functions in forEach
//   console.log(bike);
// });
// ------------------------------------------------

// ------------------------------------------------
// for Each is a higher order functions
// bikes.forEach((bike) => {
//   // passing an arrow function in forEach
//   console.log(bike);
// });
// passing these code directly in console will need a return value as it's result but it still throws undefined coz forEach is its own function and can't be returned anything

// ------------------------------------------------

// ------------------------------------------------
// named function
function fEach(el) {
  console.log(el);
}

// passing above named function in the for Each // but this isn't a recommended method to pass a named function which is outside of the forEach
bikes.forEach(fEach);

// ------------------------------------------------
// ---------------***********--------------------
