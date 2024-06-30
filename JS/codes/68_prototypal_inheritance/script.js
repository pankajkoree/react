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
