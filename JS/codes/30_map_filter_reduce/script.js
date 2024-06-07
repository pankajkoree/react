// ----------- MAP FILTER REDUCE----------------
// -----------------****************---------------------

// ---------------MAP----------------------------
// map returns an array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ---------------------------------------------
// forEach doesn't return anything and it doesn't have anyother way to change its return statement so if it return, it will be undefined
// months.forEach(function (month) {
//   console.log(month);
// });
// ---------------------------------------------

// using map for the samething and getting return value an array
// const capitailizedMonth = months.map((month) => {
//   console.log(month.toUpperCase());
//   return month.toUpperCase(); //why doesn't it prints something on the console coz it is on the fly which means it's not being consoled, so to print wrapping it's code in console
// });
// this map doesn't change the original array

// ---------------------------------------------

// console.log(
//   months.map((month, index, array) => {
//     //every parameter is optional but we use the parameter as per the need
//     // fetching the index too //the 2nd value is always the index
//     // the third parameter is the array itself, it's rarely used
//     // console.log(array);
//     console.log(`${index + 1} : ${month}`);
//     return month.toUpperCase();
//   })
// );

// -----------------****************---------------------
// ---------------FILTER----------------------------
// filter returns either the same original array or the array little bit less than the original array
// but the result of comparison of the filter result and the original result won't be true as they are created at different locations
// const filteredMonths = months.filter((month, index, Array) => {
//   console.log(month);
//   return month.toUpperCase(); //if the return value is truty value then it return the array but if it's falsy value then it won't return anything
// });
// ---------------------------------------------
// returning the specific conditioned result which means the filter will make the array of that value for whose it is true
// const spFiltereMonths = months.filter((month, index, array) => {
//   console.log(month);
//   return month.length > 5; // getting the return array whose length is greater than 5
// });
// console.log(spFiltereMonths);

// ---------------------------------------------
// const lessfilteredMonths = months.filter((month, index, array) => {
//   console.log(month);
//   return month.length <= 5;
// });
// console.log(lessfilteredMonths);

// ---------------------------------------------
// const notOfM = months.filter((month) => {
//   return month.toLowerCase().includes("m");
//   //   return month.includes("m") || month.includes("M");
// });
// console.log(notOfM);

// ---------------------------------------------

const students = [
  {
    name: "Akash",
    age: 17,
  },
  {
    name: "Ritik",
    age: 23,
  },
  {
    name: "Ashish",
    age: 19,
  },
  {
    name: "Ritika",
    age: 20,
  },
];

const isVoteable = students.filter((student) => {
  return student.age >= 18;
}); // adding the below map functions here means chaining
console.log(isVoteable);

const votableStudentName = isVoteable.map((names) => {
  return names.name;
}); // fetching only the name of the voteable students

// ---------------------------------------------
// -----------------****************---------------------
