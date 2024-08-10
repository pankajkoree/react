const data = JSON.parse(localStorage.getItem("data"));

console.log(data);

const loginEmail = document.querySelector("#email");
const loginPassword = document.querySelector("#password");
const loginButton = document.querySelector(".login-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(loginEmail.value);
  console.log(loginPassword.value);

  if (
    loginEmail.value === data.userEmail &&
    loginPassword.value === data.userPassword
  ) {
    window.location.href = "dashboard.html";
  } else {
    alert("Username or password wrong...");
  }
});
