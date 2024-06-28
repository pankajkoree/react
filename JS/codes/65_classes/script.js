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
