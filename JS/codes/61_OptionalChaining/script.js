// -----------------Optional Chaining ---------------------

const user = {
  firstName: "Manoj",
  lastName: "Bajpayee",
  age: 48,
  address: {
    city: "delhi",
  },
  getFullName: function () {
    return user.firstName + " " + user.lastName;
  },
};

const a = "city";
// console.log(user.firstName); // gives the available result
// console.log(user.address); // as it is not available, so it will be undefined
// console.log(user.address.city); // but it will throw the error as : TypeError: Cannot read properties of undefined (reading 'city')

// ---------------------------------------------------------

// lets solve the above problem using &&

// console.log(user.address && user.address.city);

// but we have a better solution this i.e. optional chaining as below

// ---------------------------------------------------------

// console.log(user?.address?.city);

// ---------------------------------------------------------

// console.log(user?.address?.[a]);

// ---------------------------------------------------------

console.log(user.getFullName?.());
