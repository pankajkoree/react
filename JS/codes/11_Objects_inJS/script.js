// creating a objects

const myName = "ritik";
const userName1 = ""; // addresses of two same strings are same but in case of objects its different
const userName2 = "";

const user = {
  fname: "pankaj",
}; // comparing the two objects gives false, coz they compare their addresses not the values

const user2 = {
  fname: "ravi",
  "last-name": "bishnoi", // giving string to the key is optional but when you use kebab case, its compulsory to make the key a string
  ritik: "student",
};

// accessing the value from objects
// using the dot (.) notation
console.log(user.fname);

// we can't access the string key using the dot notation
console.log(user2.last - name); // it throws an error or gives a NaN value

// so the correct way to access them is using bracket notation
console.log(user2["last-name"]);

// we can also access the js variables using the [] notation
console.log(user2[myName]); //myName is variable with value ritik and that ritik is the key in user2 object

// using []notation, expression can also be written
console.log(user2["last" + "-" + "name"]); // this expression results in last-name which is the key in Object user2
