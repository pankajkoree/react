class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

const user1 = new CreateUser("Rohit", "Sharma", 37);
const user2 = new CreateUser("Jasprit", "Bumrah", 30);
