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
inputValue.addEventListener("input", (e) => {
  localStorage.inputtedValue = e.target.value;
});

// ---------------********************--------------------
