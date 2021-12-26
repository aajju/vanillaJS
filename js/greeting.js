const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-container");
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
