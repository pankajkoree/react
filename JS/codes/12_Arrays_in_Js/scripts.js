// declaring an arrays  - its type would be Object
const fruitsCollection = ["Apple", "Banana", "Lemon", "Grapes", "Litchi"];

// can access the element using [] bracket notation
const accessFruits = fruitsCollection[2];

// can't assign the new array to the same existing array Eg:
// fruitsCollection = []; // gives error as TypeError: Assignment to constant variable.

// adding a objects as an item in array
fruitsCollection.push({
  potato1: "potato",
  potato2: "sweetpotato",
});
