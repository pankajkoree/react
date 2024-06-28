// function getAgeYear() {
//   return new Date().getFullYear() - user.age;
// }

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getAgeYear,
//   };
//   return user;
// }

// const user1 = createUser("Pk", "l", 22);
// const user2 = createUser("Pk", "l", 22);

// const a1 = [1, 2];
// const a2 = [3, 4];

// a1.pop === a2.pop;

// solving its memory address problem using different approach

// ---------------------------------------------------------

// without using constructor function   - 1st way
// changing user.age to this.age
// this normally points to window object but when used with some other,it points to that

// function getAgeYear() {
//   return new Date().getFullYear() - this.age;
// }

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getAgeYear,
//   };
//   return user;
// }

// const user1 = createUser("Pk", "l", 22);
// const user2 = createUser("Ak", "m", 23);

// const a1 = [1, 2];
// const a2 = [3, 4];

// a1.pop === a2.pop;

// user1.getAgeYear === user2.getAgeYear
// here this comparision gives true result, which means their memory address are same
// but it also means the polymorphism, which means that have more than one form

// ---------------------------------------------------------
// using common method i.e. commonMethods

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getAgeYear: createUser.commonMethods.getAgeYear,
//   };
//   return user;
// }

// createUser.commonMethods = {
//   getAgeYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// const user1 = createUser("Pk", "l", 22);
// const user2 = createUser("Ak", "m", 23);

// const a1 = [1, 2];
// const a2 = [3, 4];

// a1.pop === a2.pop;

// user1.getAgeYear === user2.getAgeYear
// comparing it again gives true result, which means its defined only once

// above logic is good, but the problem is we need to write extra code , so we have another logic as below:
// ---------------------------------------------------------

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//   };
//   return user;
// }

// const user1 = createUser("Pk", "l", 22);
// const user2 = createUser("Ak", "m", 23);

// function sayHi() {
//   console.log(this);
// }

// this new keyword, automatically returns a object
// console.log(new sayHi());

// ---------------------------------------------------------

function createUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// but its good that we declare constrcutor function using Capital letter

// this get resided into protoytpe
createUser.prototype.getAgeYear = function () {
  return new Date().getFullYear() - this.age;
};

const user1 = new createUser("Pk", "l", 22);
const user2 = new createUser("Ak", "m", 23);

// accessing the prototype of user1
// user1.__proto__
