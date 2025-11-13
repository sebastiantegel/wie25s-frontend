import "./style.css";

const todos = ["Lorem", "ipsum", "dolor"];

const createHtml = () => {
  const ul = document.getElementById("todos");

  if (ul) {
    ul.innerHTML = "";
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = todo;
    ul?.appendChild(li);
  });
};

document.getElementById("newTodoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = (document.getElementById("todoText") as HTMLInputElement)
    .value;

  if (todoText === "") return;

  todos.push(todoText);
  createHtml();
});

createHtml();
