// ---------- for of loop -------------------

const bikes = ["ducati", "fz", "bmw", "bullet"];

// normal way using normal for loop
// for (let i = 0; i < bikes.length; i++) {
//   console.log(bikes[i]);
// }
// --------------------------------------------------
// --------------------------------------------------
// a new way to do that
for (bike of bikes) {
  // by default, the value of bike would be two items: before execution it would be 1st value of array i.e. duccati and after the execution, it would be last value of array i.e. bullet when we use var or nothing
  //   console.log(bike);
} // but as it should be block level so we use const or let
// --------------------------------------------------

// using const in place of nothing or var
for (const biken of bikes) {
  debugger;
  console.log(biken);
} // its items will be limit to its block which means after the execution biken won't be accessible but before execution its value will remain same

// --------------*********-----------------
