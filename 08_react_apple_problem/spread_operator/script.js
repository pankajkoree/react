// concatenation using spread operator
let fname = "pankaj";
let lname = "kori";
console.log(...fname, ...lname);

// month of the year
let summer = ["june", "july", "august"];
let autumn = ["september", "october", "november"];
let winter = ["december", "january", "february"];
let spring = ["march", "april", "may"];

let monthoftheYear = [...summer, ...autumn, ...winter, ...spring];
console.log(monthoftheYear);

// sorting two array at once using spread operator
let array1 = [56, 34, 22, 78, 90, 12];
let array2 = [23, 55, 66, 74, 43];

let sortedArray = [...array1, ...array2].sort();
console.log(sortedArray);

// objects
let details = {
  fname: "pankaj",
  lname: "kori",
  age: 23,
  country: "nepal",
};

const updatedDetails = { ...details, course: "BTCS", city: "Raipur" };
console.log(updatedDetails);

// adding value from array
let i = 0;
let sum = 0;
for (i = 0; i < sortedArray.length; i++) {
  sum += sortedArray[i];
}
console.log(sum);

// adding the value while passing the arguments using spread operator
// const add_ = () => {
//   console.log(arguments);
//   let sum_ = 0;
//   for (let j = 0; j < arguments.length; j++) {
//     sum_ += arguments[j];
//   }
//   return sum_;
// };

function add_() {
  console.log(arguments);
  let sum_ = 0;
  for (let j = 0; j < arguments.length; j++) {
    sum_ += arguments[j];
  }
  return sum_;
}

// const add_ = (...arguments) => {
//   console.log(arguments);
//   let sum_ = 0;
//   for (let j = 0; j < arguments.length; j++) {
//     sum_ += arguments[j];
//   }
//   return sum_;
// };

// const add_ = function() {
//   console.log(arguments);
//   let sum_ = 0;
//   for (let j = 0; j < arguments.length; j++) {
//     sum_ += arguments[j];
//   }
//   return sum_;
// };
