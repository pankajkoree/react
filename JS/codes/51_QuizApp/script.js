const newAccount = document.querySelector(".new-account");
const newAccountForm = document.querySelector(".new_account_form");
const newAccountButton = document.querySelector(".button_div");
const formDiv = document.querySelector(".form-div");
let loginID = document.querySelector("#username_id");
let loginPWD = document.querySelector("#password");
const loginLOGIN = document.querySelector(".button-container");

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

userIDNewAccount.addEventListener("input", (e) => {
  iDNewAccount = e.target.value;
  console.log(iDNewAccount);
});
passwordNewAccount.addEventListener("input", (e) => {
  pwdNewAccount = e.target.value;
  console.log(pwdNewAccount);
});

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
  mainFormLoginID += e.target.value;
  return mainFormLoginID;
});
loginPWD.addEventListener("input", (e) => {
  mainFormLoginPWD += e.target.value;
  return mainFormLoginPWD;
});
console.log(mainFormLoginID, mainFormLoginPWD);

loginLOGIN.addEventListener("click", () => {
  // if (
  //   loginID.value == userDetailsFromNewAccount.userID &&
  //   loginPWD == userDetailsFromNewAccount.userPassword
  // ) {
  //   console.log("Successful");
  // } else {
  //   console.log("Wrong user id or password");
  // }
  console.log(mainFormLoginID, mainFormLoginPWD);
});
