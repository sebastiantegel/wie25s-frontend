import type { Todo } from "./models/Todo";

export const createHtml = (todos: Todo[]) => {
  const ul = document.getElementById("todos");

  if (ul) {
    ul.innerHTML = "";
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = todo.text;

    ul?.appendChild(li);
  });
};
