// creating a multidimensional array
const mArray = [
  ["ravi", 67],
  ["ritik", 34],
];

const nameAndNumberList = [
  ["Adarsh", 75],
  ["Akash", 90],
];

//accessing the nested element of the array
const accessElem = nameAndNumberList[1][0]; //accessing only the name of the 2nd array i.e. Akash

// skiping some array element and adding a item after that
const skipElem = (nameAndNumberList[1][5] = "Rohit");
