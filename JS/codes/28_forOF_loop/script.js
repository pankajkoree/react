// ---------- for of loop -------------------
// it can be used in array, node list, string but can't be used in object

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
// for (const biken of bikes) {
//   console.log(biken);
// } // its items will be limit to its block which means after the execution biken won't be accessible but before execution its value will remain same

// --------------------------------------------------

// using for of in Object

// const details = {
//   name: "pk",
//   age: 23,
//   course: "BTCS",
//   nation: "nepal",
//   state: "CG",
// };

// for (const elem of details) {
//   console.log(elem);
// } // will throws the error as Uncaught TypeError: details is not iterable

//  so whats the way to access the element of object
// i.e. for in loop
// --------------*********-----------------
// ---------- for in loop -------------------

const details = {
  name: "pk",
  age: 23,
  course: "BTCS",
  nation: "nepal",
  state: "CG",
};

// for (const elem in details) {
//   console.log(`${elem} : ${details[elem]}`); //only elem will fetch the key of object and using bracket notation we can access the value too
// }    // but it's not a recommended way coz it takes more time to run or performance lags
// --------------------------------------------------
// --------------------------------------------------
// so another way :
const keys = Object.keys(details); //directly access the keys
const values = Object.values(details); //directly access the values and entries will access both keys and values
for (const key of keys) {
  console.log(`${key} : ${details[key]}`);
} // although it is one more line but it's performance is better
// --------------------------------------------------
// --------------*********-----------------
