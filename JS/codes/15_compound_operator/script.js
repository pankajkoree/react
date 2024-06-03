// Comound operator is nothing but the composition of assignment and arithmetic operator
// +=
let numAdd = 5;
numAdd += 6;

// -=
let numMinus = 7;
numMinus -= 3;

// %=
let numMod = 8;
numMod %= 3;

// postIncr
let postIncr = 6;
postIncr++;

// postIncr++   //at the this line, it is getting incremented but return the same value
// 7
// postIncr     //after incrementation, when called the variable then we can see changes in value
// 8

// preIncr
let preIncr = 9;
++preIncr; // returns the incremented value
