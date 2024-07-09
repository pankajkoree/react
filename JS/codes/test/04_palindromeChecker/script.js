const button = document.getElementById("check-btn");
const inputField = document.getElementById("text-input");
const result = document.getElementById("result");

const checkingPalindrome = (inputValue) => {
  let originalInput = inputValue;
  inputValue = inputValue.toLowerCase();
  if (inputValue === "") {
    alert("Please input a value");
  } else if (inputValue.includes("_")) {
    inputValue = inputValue.split("");
    let removehypenArray = "";
    inputValue.forEach((item) => {
      item == "_" ? delete item : (removehypenArray += item);
    });
    let reverseValue = removehypenArray.split("").reverse().join("");
    result.innerText = `${originalInput} ${
      removehypenArray == reverseValue ? "is" : "is not"
    } a palindrome`;
  } else if (inputValue.includes("_")) {
    inputValue = inputValue.split("");
    let removehypenArray = "";
    inputValue.forEach((item) => {
      item == "_" ? delete item : (removehypenArray += item);
    });
    let reverseValue = removehypenArray.split("").reverse().join("");
    result.innerText = `${originalInput} ${
      removehypenArray == reverseValue ? "is" : "is not"
    } a palindrome`;
  } else {
    console.log(inputValue);
  }
};

button.addEventListener("click", () => {
  checkingPalindrome(inputField.value);
});
