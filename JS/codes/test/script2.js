// datatype
// number
// string
// undefined
// null
// boolean
// symbol

// -------------------------------------------------------

// let vs var

// let
// ------ variable can't be redeclared but can be re-assigned
//------- not hoisted on top meaning can't be accessed before its declaration
// ----- block scope
// ------ temporal dead zone meaning not accessible until its declaration

// ***code
// let a = 4;
// // let a = 5;
// console.log(a);

// {
//   let a = 5;
//   console.log(a);
// }
// ***code

// ------

// var
// --- can be redeclared
// ----- can be accessed before declaration but value will be undefined
// ----- function scope
// ---- nothing like temporal dead zone

// ***code
// console.log(b);
// var b = 2;
// var b = 4;
// console.log(b);
// {
//   var b = 5;
//   console.log(b);
// }
// ***code

// -------------------------------------------------------

// bubbling - inside out
// capturing - outside in

// const mainDiv = document.querySelector(".main-div");
// const childDiv = document.querySelector(".child-div");
// const grandChildDiv = document.querySelector(".grand-child");

// grandChildDiv.addEventListener("click", () => {
//   console.log("grandchild clicked");
// });

// childDiv.addEventListener("click", () => {
//   console.log("child clicked");
// });

// mainDiv.addEventListener("click", () => {
//   console.log("mainDiv clicked");
// });

// -------------------------------------------------------

// const user1 = {
//   name: "John",
//   age: 29,
//   address: {
//     city: "mumbai",
//     state: "MH",
//   },
// };

// const user2 = user1;

// user2.name = "PK";

// -------------------------------------------------------

let arr = [0, 1, 2, 3, 4, 5];

console.log(
  arr
    .filter((arrValue) => arrValue < 3)
    .map((filterdValuetoMap) => filterdValuetoMap + 2)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
);
