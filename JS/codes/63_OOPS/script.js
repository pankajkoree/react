// const user = {
//   firstName: "Manoj",
//   lastName: "Bajpayee",
//   age: 48,
// };

// Abstraction means hiding the complexity of the program, so that the user don't need to know whats behind the logic

// // function
// function getAgeYear(age) {
//   return new Date().getFullYear() - age;
// }

// ---------------------------------------------------------
// Encapsulation means binding data at one place, but it shouldn't be accessible outside if not required
const user = {
  firstName: "Manoj",
  lastName: "Bajpayee",
  age: 48,

  getAgeYear: function () {
    return new Date().getFullYear() - user.age;
  },
};

// ---------------------------------------------------------

// factory function - so that we don't need to repeat the code

function createUser(firstName, lastName, age) {
  const user = {
    // a trick, if the key name and property name are same, we dont need to write them as key:value pair, just writing key will work
    firstName: firstName,
    lastName: lastName,
    age: age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}

const user1 = createUser("Pk", "l", 22);
const user2 = createUser("Pk", "l", 22);

// user1.getAgeYear === user2.getAgeYear()
// comparing these two gives a drawback of storage, which means the things are same but still they are being stored in different places

// ---------------------------------------------------------

//  so to solve it we have a constructor functions

// ---------------------------------------------------------

const a1 = [1, 2];
const a2 = [3, 4];

a1.pop === a2.pop;
// this array functions comparision gives the result as true so this means the address of both of them are one
