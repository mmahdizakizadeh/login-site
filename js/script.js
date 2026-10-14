const log = document.getElementById("login");
const reg = document.getElementById("register");
const btn = document.getElementById("btn");

function login() {
  log.style.right = "0px";
  reg.style.right = "450px";
  btn.style.right = "0px";
}

function register() {
  log.style.right = "-450px";
  reg.style.right = "0px";
  btn.style.right = "110px";
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

const username2 = document.getElementById("username2");
const password2 = document.getElementById("password2");
const usernameError2 = document.getElementById("usernameError2");
const passwordError2 = document.getElementById("passwordError2");

function validateInput(input, errorElement, fieldName) {
  input.addEventListener("input", function () {
    if (input.value.length < 8) {
      errorElement.innerHTML = `${fieldName} معتبر نیست`;
      errorElement.style.color = "red";
    } else {
      errorElement.innerHTML = `${fieldName} معتبر است`;
      errorElement.style.color = "green";
    }
  });
}

validateInput(username, usernameError, "نام کاربری");
validateInput(password, passwordError, "رمز عبور");
validateInput(username2, usernameError2, "نام کاربری");
validateInput(password2, passwordError2, "رمز عبور");