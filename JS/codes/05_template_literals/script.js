// strings are indexed
const string1 = "nothing but a string indexing";
// PROPERTIES of the string
const indexString = string1[5]; //index value of string at index 6

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

// concat - joining two strings
const concatMessage1 = "hello";
const concatMessage2 = "world";

const concatString = concatMessage1.concat(" ", concatMessage2, "!"); //to add something at start or end, add it using comma

const multiConcat = concatMessage1.concat(concatMessage2, spaceString);

// padStart() - just like atm number only last some digit are visible, and others are * or something EG:'############5744'

const lastFourDigit = "5744";
const padStartDigit = lastFourDigit.padStart(16, "#"); // .padStart(no_of_digits,'symbol to be shown at start')

// padEnd() - adds the some special character at the end of to be added string eg:'5744************'
const padEndDigit = lastFourDigit.padEnd(16, "*");
