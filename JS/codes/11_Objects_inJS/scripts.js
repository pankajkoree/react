const user = {
  firstName: "Adarsh",
  lastName: "Singh",
  location: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 368763478,
      area: "787 sq km",
    },
  },
  age: 15,
  isGraduate: false,
};

// deleting some property
// delete user.age;

// using seal property - to avoid the feature of deleting or adding the property but the property can be modified
Object.seal(user);

// using freeze - its more powerful than seal, it won't allow to modify too
Object.freeze(user);

// in keyword - to check the key exists in objects or not? - to check the key should be given in quotes
const inCheck = "fname" in user;
