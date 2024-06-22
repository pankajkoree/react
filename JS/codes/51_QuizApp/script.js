const main = document.querySelector("main");
const newAccount = document.querySelector(".new-account");
const newAccountForm = document.querySelector(".new_account_form");
const newAccountButton = document.querySelector(".button_div");
const formDiv = document.querySelector(".form-div");
let loginID = document.querySelector("#loginID");
let loginPWD = document.querySelector("#loginPWD");
const loginLOGIN = document.querySelector(".button-container");
const quizHomePage = document.querySelector(".quizHomePage");

// newAccount opens the new account form
newAccount.addEventListener("click", () => {
  newAccountForm.classList.add("open");
  formDiv.classList.add("close");
});

// adding the value to localstorage i.e. username and password
const userIDNewAccount = document.querySelector("#userid_new_account");
const passwordNewAccount = document.querySelector("#password_new_account");

let iDNewAccount;
let pwdNewAccount;

// id and password while inputing
userIDNewAccount.addEventListener("input", (e) => {
  iDNewAccount = e.target.value;
});
passwordNewAccount.addEventListener("input", (e) => {
  pwdNewAccount = e.target.value;
});

// setting the value from new account to localstorage
newAccountButton.addEventListener("click", () => {
  newAccountForm.classList.remove("open");
  formDiv.classList.remove("close");
  localStorage.setItem("idFromNewAccount", iDNewAccount);
  localStorage.setItem("pwdFromNewAccount", pwdNewAccount);
});

// fetching the details from the localstorage and storing it into a variable
let userDetailsFromNewAccount = {
  userID: localStorage.getItem("idFromNewAccount"),
  userPassword: localStorage.getItem("pwdFromNewAccount"),
};

// adding condition to check whether the userId and password matches or not
let mainFormLoginID = "";
let mainFormLoginPWD = "";
loginID.addEventListener("input", (e) => {
  mainFormLoginID = e.target.value;
});
loginPWD.addEventListener("input", (e) => {
  mainFormLoginPWD = e.target.value;
});
console.log(mainFormLoginID, mainFormLoginPWD);

// checking whether user login credintials

loginLOGIN.addEventListener("click", () => {
  if (
    mainFormLoginID == userDetailsFromNewAccount.userID &&
    mainFormLoginPWD == userDetailsFromNewAccount.userPassword
  ) {
    console.log("Successful");
    formDiv.style.display = "none";
    quizHomePage.style.display = "block";
  } else {
    console.log("Wrong user id or password");
    alert("please enter correct credentials");
  }
  console.log(mainFormLoginID, mainFormLoginPWD);
});
