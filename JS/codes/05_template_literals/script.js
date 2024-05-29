// strings are indexed
const string1 = "nothing but a string indexing";
// PROPERTIES of the string
console.log(string1[5]); //index value of string at index 6

// checking the length of the string
const stringLength = string1.length;

// METHOD WITHOUT ARGUMENT of the string

// uppercase of the string
const upperCaseString = string1.toUpperCase();

// lowercase of the string
const lowerCaseString = string1.toLocaleLowerCase();

// trim method to remove extra spaces
const spaceString = "     hello    ";
const trimmedString = spaceString.trim();

// trimStart() - to remove extra spaces from front
const trimmedStart = spaceString.trimStart();

// trimEnd() = to remove the extra spaces in the end
const trimmedEnd = spaceString.trimEnd();

// METHOD WITH ARGUMENT of the string

//checking whether some string is present in the string or not using includes()
const includeString = string1.includes("nothing"); //comparing with original lowercase string

const includeString2 = string1.includes("Nothing");

// indexOf() - to check the index of some letters
const letterIndex = string1.indexOf("j"); // returns the index of the letter if present otherwise -1

// replace - replace some existing word with new one
const replacedString = string1.replace("indexing", "numbering"); // if to be replaced string isn't available in original string, then no changes occurs
