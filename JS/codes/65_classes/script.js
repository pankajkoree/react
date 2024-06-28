function createUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

createUser.prototype.getAgeYear = function () {
  return new Date().getFullYear() - this.age;
};

createUser.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

const user1 = new createUser("Pk", "l", 22);
const user2 = new createUser("Ak", "m", 23);
