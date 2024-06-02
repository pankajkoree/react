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

// Array methods
const oddNumber = [1, 3, 5, 7, 9];
// shift() - removes the element from the front
oddNumber.shift();

// unshift()  - adds the element in the front of the array
const evenNumber = [2, 4, 6, 8];
evenNumber.unshift(10);

// concat() - adds two array in one
const concatArray = oddNumber.concat(evenNumber);

// indexOf() - gives the index of the item
const indexOfItem = oddNumber.indexOf(3);

// includes() - gives true if number exist
const includeItem = oddNumber.includes(5);

// reverse() - reverse the original array
const reverseArrayItem = oddNumber.reverse();

// sort() - sorts the array in alphabetically, and numerically where, 0 means 1st and 9 means last as per the ASCII code
const sortedArray = concatArray.sort();

// slice() - with the index it slices the array - 1st argument means the start and 2nd argument means the ending
const slicedArray = concatArray.slice(4);

// splice() - removes the element from the array using splice(start,deleteCount,modified value) - modified value is optional whether u want to replace the deleted value or not
const splicedArray = concatArray.splice(3, 2, "splicedValue");
