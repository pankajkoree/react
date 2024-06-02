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

// tictactoe array - 'X' for cross, null for empty and "O" for circle
const tictactoeArray = [
  ["X", null, null],
  [null, null, "O"],
  ["O", null, "X"],
];
