// -----------Number-----------
console.log(1);
console.log(typeof 1);

// ------------String------------
console.log(
  "String using double quotes - charater, word is considered as string"
);
console.log(
  typeof "String using double quotes - charater, word is considered as string"
);

console.log(
  "String using single quotes - charater, word is considered as string"
);
console.log(
  typeof "String using single quotes - charater, word is considered as string"
);

console.log(`String using backtick - charater, word is considered as string`);
console.log(
  typeof `String using backtick - charater, word is considered as string`
);

// ------------ from string to number------------
console.log(typeof "100"); // gives the type as string
console.log(+"100"); // makes the string into number
console.log(typeof +"100"); //gives the type as string  - these type is only possible in +,- but not *,/,%

console.log(typeof "100");
console.log(parseInt("1200")); // making the string 1200 to number 1200

// ------------from number to string-----------
console.log(typeof 1300 + " ");
const val1 = "hello" + 1200;
console.log(val1);
console.log(typeof val1);

// ------------Boolean -------------
console.log(typeof true);
console.log(typeof false);
console.log(+true);
console.log(+false);

// ------undefined-----------
console.log(typeof undefined);
// undined can't be converted into number
console.log(+undefined);

// -----Null------------
console.log(null);
console.log(typeof null);

// -----BigInt-----------
let num1 = 12345678961986489; //this is also the integer but its too large so its gives suggestion as "Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers" so to avoid that suggestion, use BigInt
console.log(num1);
console.log(typeof num1);
let num2 = 12345678961986489n;
console.log(num2);
console.log(typeof num2);
