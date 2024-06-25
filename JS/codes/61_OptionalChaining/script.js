// -----------------Optional Chaining ---------------------

const user = {
  firstName: "Manoj",
  lastName: "Bajpayee",
  age: 48,
};

console.log(user.firstName); // gives the available result
console.log(user.address); // as it is not available, so it will be undefined
console.log(user.address.city); // but it will throw the error as : TypeError: Cannot read properties of undefined (reading 'city')

// ---------------------------------------------------------
