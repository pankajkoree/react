const newAccount = document.querySelector(".new-account");
const newAccountForm = document.querySelector(".new_account_form");
const newAccountButton = document.querySelector(".button_div");
const formDiv = document.querySelector(".form-div");

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
});
passwordNewAccount.addEventListener("input", (e) => {
  pwdNewAccount = e.target.value;
});

let userDetailsFromNewAccount = {};

newAccountButton.addEventListener("click", () => {
  newAccountForm.classList.remove("open");
  formDiv.classList.remove("close");
});
