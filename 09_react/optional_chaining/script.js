const user = {
  firstName: "Pankaj",
  lastName: "kori",
  age: 23,
  country: {
    birthCountry: "Nepal",
  },
  getFullName: function () {
    return user.firstName + " " + user.lastName;
  },
  getSelection: "hi",
};

//accessing values from above objects
// gives value if the value is present
// console.log(user.firstName);

// but what if the nested value isn't present -- then it throws the error else undefined

//console.log(user.country.birthCountry);

// so the solution of getting error
// if (user.country) {
//   console.log(user.country.birthCountry);
// } else {
//   // this is extra added doesn't matter with it
//   console.log("we get error");
// }

// but the above solution have more LOC
// console.log(user.country && user.country.birthCountry);

// but still the above's solution isn't good enough, so 1st
// console.log(user?.country?.birthCountry);

// 2nd
// console.log(user.country?.["birthCountry"]);

// 3rd dynamic
const a = "birthCountry";
console.log(user.country?.[a]);

// using option chaing in function of objects
// console.log(user.getFullName());

// above function call gives result but in case of unavailability of function it throws error so
console.log(user.getFullName?.()); //gives undefined
