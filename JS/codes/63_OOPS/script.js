// const user = {
//   firstName: "Manoj",
//   lastName: "Bajpayee",
//   age: 48,
// };

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
