// ---------------localStorage-----------------------------

// The localStorage object stores data with no expiration date.
// The data is not deleted when the browser is closed, and are available for future sessions.

// the variavle made normally in console gets deleted once the page is being reloaded but the variable made using localstorage will remain although page gets reloaded

// -------------------------------------------------------

const nameTag = document.querySelector(".name-tag");

// adding the username directly from the localstorage and seeing changes in dom
nameTag.innerText += localStorage.userName;

// -------------------------------------------------------

// setting the value from input in the localstorage
const inputValue = document.querySelector(".input-value");

//it sets the value at the time of input
// inputValue.addEventListener("input", (e) => {
//   localStorage.nameTag = e.target.value;
//   nameTag.innerText = localStorage.nameTag;
// });
// but its not a good way

// -------------------------------------------------------

nameTag.innerText = localStorage.getItem("userName");

inputValue.addEventListener("input", (e) => {
  localStorage.setItem("userName", e.target.value);
  nameTag.innerText = localStorage.userName;
});

// -------------------------------------------------------

// if we try to access those property which isn't present then there's two case

console.log(localStorage.getItem("age")); //null
console.log(localStorage.age); //undefined
// this is the minor difference between these two

// ---------------********************--------------------
