class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static hi = "hello"; //static properties won't directly goes into its created object like theres user1,user2

  static {
    console.log(this);
    // console.log(
    //   "runs automatically without even creating a object of the class"
    // );

    let a = 4; //won't be accessible outside of it

    this.getFullName = function () {
      return this.firstName + " " + this.lastName;
    }; //this is static method
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

// CreateUser.Myname = "pankaj"; // can also be done like this, which will be static

const user1 = new CreateUser("Rohit", "Sharma", 37);
const user2 = new CreateUser("Jasprit", "Bumrah", 30);
