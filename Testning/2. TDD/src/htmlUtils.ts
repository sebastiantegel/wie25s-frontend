import type { Todo } from "./models/Todo";

export const createHtml = (todos: Todo[]) => {
  const ul = document.getElementById("todos");

  if (ul) {
    ul.innerHTML = "";
  }

  todos.forEach((todo, i) => {
    const li = document.createElement("li");
    const removeButton = document.createElement("button");

    li.innerHTML = todo.text;
    removeButton.innerHTML = "Ta bort";
    removeButton.className = "remove";

    removeButton.addEventListener("click", () => {
      todos.splice(i, 1);
      createHtml(todos);
    });

    li.appendChild(removeButton);

    ul?.appendChild(li);
  });
};
