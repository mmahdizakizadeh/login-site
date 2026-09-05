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

let username = document.getElementById("username"),
  password = document.getElementById("password"),
  usernameError = document.getElementById("usernameError"),
  passwordError = document.getElementById("passwordError");

function usernameErrorfun() {
  if (username.value.length < 8) {
    usernameError.innerHTML = "نام کاربری معتبر نیست";
    usernameError.style.color = "red";
  } else {
    usernameError.innerHTML = "نام کاربری معتبر است";
    usernameError.style.color = "green";
  }
}

function passwordErrorfun() {
  if (password.value.length < 8) {
    passwordError.innerHTML = "رمز عبور معتبر نیست";
    passwordError.style.color = "red";
  } else {
    passwordError.innerHTML = "رمز عبور معتبر است";
    passwordError.style.color = "green";
  }
}

let username2 = document.getElementsById("username2"),
  password2 = document.getElementsById("password2"),
  usernameError2 = document.getElementsById("usernameError2"),
  passwordError2 = document.getElementsById("passwordError2");

  function usernameErrorfun2() {
  if (username2.value.length < 8) {
    usernameError2.innerHTML = "نام کاربری معتبر نیست";
    usernameError.style.color = "red";
  } else {
    usernameError2.innerHTML = "نام کاربری معتبر است";
    usernameError2.style.color = "green";
  }
}

function passwordErrorfun2() {
  if (password2.value.length < 8) {
    passwordError2.innerHTML = "رمز عبور معتبر نیست";
    passwordError2.style.color = "red";
  } else {
    passwordError2.innerHTML = "رمز عبور معتبر است";
    passwordError2.style.color = "green";
  }
}
