// -----Comparison Operator------

// Equality Comparison  - it does implicit(automatically)conversion if data type isn't suitable
const equalCompare = 22 == "22";

// strict equality operator - compares datatype with value - it requires explicit conversion
const strictEqualCompare = 22 === "22";

// not equality operator - just inverted result of equality operator
const notEqualCompare = 23 != "23";

// strict not equality operator - just the exact opposite result of strict equality operator
const notStrictEqualCompare = 55 !== "55";

// Similarly there are others too such as greater than, greater than or equal to, less than, less than or equal to

// ternary operator - short hand of if-else
const ternaryCompare = 55 > 45 ? "Yes" : "No";

// Logical Operators
// AND operator - gives true only when both the condition results true
const ff = 22 > 3 && 24 < 20;
const tf = 22 == "22" && 22 === "22";
const ft = 35 !== 35 && 35 != 36;
const tt = 35 === 35 && 57 !== 45;

// OR operator - gives true when either of the condition results true
const orFF = 34 != 34 || 35 == 36;
const orFT = 67 == 65 || 35 == 35;
const orTF = 45 == 45 || 56 === "56";
const orTT = 98 == 98 || "98" === "98";

// NOT operator - gives the reverse result of that original result
const notRes = !(55 == 55);
