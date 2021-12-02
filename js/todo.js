const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
// console.log(todoForm, todoList);

const localTodo = JSON.parse(localStorage.getItem("todo"));
let toDos = [];

if (localTodo) {
  toDos = localTodo;
  toDos.forEach((item) => {
    showTodo(item);
  });
  //   console.log(toDos);
}

function saveTodo() {
  localStorage.setItem("todo", JSON.stringify(toDos));
}

function onDeleteClick(event) {
  event.preventDefault();
  // console.log(event.target.parentElement);
  const li = event.target.parentElement;
  console.log(li, li.id);
  li.remove();
  console.log(li, li.id);

  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  console.log(toDos);
  saveTodo();
}

function showTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  //   console.log("in showTodo" + li.id);
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = todo.todo;
  btn.innerText = "❌";

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);

  btn.addEventListener("click", onDeleteClick);

  //   document.body.li.appendChild(span);
}

function onSubmit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  const newTodoWithId = { todo: newTodo, id: Date.now() };
  toDos.push(newTodoWithId);

  todoInput.value = "";
  saveTodo(newTodoWithId);
  showTodo(newTodoWithId);
}

todoForm.addEventListener("submit", onSubmit);
