class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getAgeYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

// CreateUser.prototype.getAgeYear = function () {
//   return new Date().getFullYear() - this.age;
// };

// CreateUser.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

const user1 = new CreateUser("Pk", "l", 22);
const user2 = new CreateUser("Ak", "m", 23);
