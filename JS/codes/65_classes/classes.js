class CreateUser {
  #age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    // previously for private things dev's used to use _, __ to denote that its private but still those things were accessible
    // this._age = age

    // then after a new feature came for private property as
    // this.#age = age  //but if this will below public props then it will throw error, so it should be kept at top
    // this.age = age;
    this.#age = age;
  }

  // if we want something to be private static we can add it outside the constructor
  #hi = "hello world";

  getAgeYear() {
    console.log(this.#hi);
    return new Date().getFullYear() - this.#age;
  }

  // making the method private
  #getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Ravi", "Shastri", 56);
const user2 = new CreateUser("Manoj", "Bajpayee", 53);

const newData = {
  //setting a private key-value pair
  "#class": "BTCS", //but its not a truly private
  // and accessing this private using dot operator throws error for this we need to access as : newData['#class']
  section: 2,
};
