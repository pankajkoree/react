const newAccount = document.querySelector(".new-account");
const newAccountForm = document.querySelector(".new_account_form");
const newAccountButton = document.querySelector(".button_div");
const formDiv = document.querySelector(".form-div");

// newAccount opens the new account form
newAccount.addEventListener("click", () => {
  newAccountForm.classList.add("open");
  formDiv.classList.add("close");
});

newAccountButton.addEventListener("click", () => {
  newAccountForm.classList.remove("open");
  formDiv.classList.remove("close");
});
