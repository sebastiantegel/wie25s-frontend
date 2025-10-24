import { Person } from "./models/Person";
import "./style.css";

const persons: Person[] = [];

const handleClick = () => {
  const firstnameTag = document.getElementById("firstname");

  if (firstnameTag) {
    const firstname = (firstnameTag as HTMLInputElement).value;

    console.log(firstname);
  }
};

const handleSubmit = () => {
  const nameTag = document.getElementById("name");
  const colorTag = document.getElementById("color");

  if (nameTag && colorTag) {
    const userName = (nameTag as HTMLInputElement).value;
    const userColor = (colorTag as HTMLInputElement).value;

    const p = new Person(userName, userColor);
    persons.push(p);
    createHtml();
  }
};

const createHtml = () => {
  const personsContainer = document.getElementById("persons");

  if (personsContainer) {
    personsContainer.innerHTML = "";
  }

  persons.forEach((person) => {
    const container = document.createElement("div");
    const nameTag = document.createElement("h2");
    const colorBox = document.createElement("div");

    container.className = "person";
    nameTag.innerHTML = person.name;
    colorBox.className = "colorBox";
    colorBox.style.backgroundColor = person.color;

    container.appendChild(nameTag);
    container.appendChild(colorBox);
    personsContainer?.appendChild(container);
  });
};

// const saveButton = document.getElementById("save");

// if (saveButton) {
//   saveButton.addEventListener("click", handleClick);
// }

document.getElementById("save")?.addEventListener("click", handleClick);

// document.getElementById("theForm")?.addEventListener("submit", handleSubmit);
document.getElementById("theForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});
