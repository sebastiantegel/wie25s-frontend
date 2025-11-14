import { createHtml } from "./htmlUtils";
import { Todo } from "./models/Todo";
import "./style.css";

const todos: Todo[] = [];

document.getElementById("todoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const theInput = document.getElementById("todoText");

  let text = "";
  if (theInput) {
    text = (theInput as HTMLInputElement).value;
  }

  const newTodo = new Todo(text);
  todos.push(newTodo);

  createHtml(todos);
});
