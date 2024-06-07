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

// ------------------------------------------------

// ------------------------------------------------
// named function
function fEach(el) {
  console.log(el);
}

// passing above named function in the for Each
bikes.forEach(fEach);

// ------------------------------------------------
// ---------------***********--------------------
