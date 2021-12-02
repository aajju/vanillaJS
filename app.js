const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginGreeting = document.querySelector("#login-greeting");
const loginInput = document.querySelector("#login-form input");

const localUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  //   console.dir(event);
  //   console.log(event.value);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);
  //   loginGreeting.classList.remove(HIDDEN_CLASS);
  //   loginGreeting.innerText = `hello ${username}`;
  greetings(username);
}

function greetings(username) {
  loginGreeting.classList.remove(HIDDEN_CLASS);
  loginGreeting.innerText = `hello ${username}`;
}

if (localUsername === null) {
  // show form
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show greeting
  //   loginGreeting.classList.remove(HIDDEN_CLASS);
  //   loginGreeting.innerText = `hello ${localUsername}`;
  greetings(localUsername);
}

// title = document.querySelector(".test:nth-child(2)");

// console.log(title);
// console.dir(title);

// title.addEventListener("mousedown", clickFunc);

// function clickFunc() {
//   console.log("click");
// }

// title = document.querySelector("h1");
// console.log(title);
// console.log(title.innerText);

// title.innerText = "got you!";

// title2 = document.getElementById("test");
// console.log(title2);

// console.log(document);

// headers = document.querySelector("header");

// console.dir(headers);

// 걍 함수

// function plus(a, b) {
//   console.log(a + b);
// }

// function minus(a, b) {
//   console.log(a - b);
// }

// function divide(a, b) {
//   console.log(a / b);
// }

// function multiple(a, b) {
//   console.log(a * b);
// }

// function power(a, b) {
//   console.log(a ** b);
// }

// plus(1, 2);
// minus(1, 2);
// divide(1, 2);
// multiple(1, 2);
// power(1, 2);

// 오브젝트 안에 함수

// const calculator = {
//   plus: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   power: function (a, b) {
//     console.log(a ** b);
//   },
// };

// calculator.plus(1, 2);
// calculator.minus(1, 2);
// calculator.divide(1, 2);
// calculator.power(1, 2);
