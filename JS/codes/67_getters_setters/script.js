// class CreateUser {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }
// }

// const user1 = new CreateUser("Rohit", "Sharma", 37);
// const user2 = new CreateUser("Jasprit", "Bumrah", 30);

// ----------------------------------------------------------

// const user = {
//   firstName: "Rohit",
//   lastName: "Sharma",

//   // fullName: function () {
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.fullName());

// user.fullName = "Virat Kohli"; //this converts the function into a properties, so to avoid such problems we use getter and setter

// ----------------------------------------------------------

const user = {
  firstName: "Rohit",
  lastName: "Sharma",

  // fullName: function () {
  //   return `${this.firstName} ${this.lastName}`;
  // },

  get fullName() {
    console.log(
      "runs when clicked on this function in console or gets accessed"
    );
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

user.fullName = "Axar Patel"; //this will set the value too
console.log(user.fullName);
