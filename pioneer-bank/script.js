// sellectors
const loginBtn = document.getElementById("login-btn");
const loginArea = document.getElementById("login-area");
const transArea = document.getElementById("transaction-area");
console.log(loginBtn);

loginBtn.addEventListener("click", function () {
  loginArea.style.display = "none";
  transArea.style.display = "block";
});
