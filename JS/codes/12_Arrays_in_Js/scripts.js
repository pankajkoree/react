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

// adding some empty items as undefined
fruitsCollection[10] = [];

// adding an item in array at last - normal way and right way
fruitsCollection[fruitsCollection.length] = "Kiwi"; // normal way

fruitsCollection.push("WaterMelon"); //right way

// deleting/removing from last
fruitsCollection.pop();

//trying to add key value pairs in array
// fruitsCollection[firstName:"Hello"]  // gives error if we add key value pairs like that in array

// a new way to add key value pairs but it's not recommended to use and its length won't be increasing, it remains 0
const newArray = [];
newArray.firstName = "Apple";
newArray.lastName = "Fruits";

// adding object in unusual way to array
const newObject = {
  rollno: 40,
  age: 44,
};
newObject.state = "CG";

// small task - rainBow color
const rainbowColor = [
  "Violet",
  "Indigo",
  "Blue",
  "Green",
  "Orange",
  "Yellow",
  "Red",
];
