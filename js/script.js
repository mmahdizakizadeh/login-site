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
