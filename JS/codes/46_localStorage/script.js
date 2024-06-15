// ---------------localStorage-----------------------------

// The localStorage object stores data with no expiration date.
// The data is not deleted when the browser is closed, and are available for future sessions.

// the variavle made normally in console gets deleted once the page is being reloaded but the variable made using localstorage will remain although page gets reloaded

// -------------------------------------------------------

const nameTag = document.querySelector(".name-tag");
const age = document.querySelector(".age-tag");
const ageInput = document.querySelector(".ageInput");
const nameInput = document.querySelector(".input-value");

// adding the username directly from the localstorage and seeing changes in dom
// nameTag.innerText += localStorage.userName;

// -------------------------------------------------------

// setting the value from input in the localstorage

//it sets the value at the time of input
// inputValue.addEventListener("input", (e) => {
//   localStorage.nameTag = e.target.value;
//   nameTag.innerText = localStorage.nameTag;
// });
// but its not a good way

// -------------------------------------------------------

// alternate way of above thing, getting name from input and using localstorage updating the dom
// nameTag.innerText = localStorage.getItem("userName");

// inputValue.addEventListener("input", (e) => {
//   localStorage.setItem("userName", e.target.value);
//   nameTag.innerText = localStorage.userName;
// });

// -------------------------------------------------------

// if we try to access those property which isn't present then there's two case

console.log(localStorage.getItem("age")); //null
console.log(localStorage.age); //undefined
// this is the minor difference between these two

// -------------------------------------------------------

// updating the age dom from getting input and localstorage variable

// ageInput.addEventListener("input", (e) => {
//   localStorage.setItem("myAge", e.target.value);
//   age.innerText = localStorage.myAge;
// });
// age.innerText = localStorage.getItem("myAge");

// ---------------********************--------------------
// -------------------------------------------------------

// making the object and then accessing it to update the DOM
// validating if data available in localstorage then fetching from  it or simply adding
const myData = JSON.parse(localStorage.getItem("myData")) || {};

if (myData.name) {
  nameTag.innerText = myData.name;
}
if (myData.age) {
  age.innerText = myData.age;
}

nameInput.addEventListener("input", (e) => {
  myData.name = e.target.value;

  //   localStorage.setItem("myData", myData); // this store the value as [object,object] so to show as object we do as below:
  localStorage.setItem("myData", JSON.stringify(myData));
  localStorage.setItem("nameTag", myData.name);
});

ageInput.addEventListener("input", (e) => {
  myData.age = e.target.value;

  localStorage.setItem("myData", JSON.stringify(myData));
  localStorage.setItem("age", myData.age);
});

// -------------------------------------------------------

// localStorage.clear(); // deletes all the data available in localstorage

// localStorage.removeItem('age')   //removes a single element

// ---------------********************--------------------
