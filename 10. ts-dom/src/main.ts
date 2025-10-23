import type { Animal } from "./models/Animal";
import type { IAnimal } from "./models/IAnimal";
import "./style.css";

const majsan: IAnimal = {
  color: "White",
  name: "Majsan",
  weight: 3,
  cuteness: 999,
};

console.log(majsan);

const sotis: Animal = {
  color: "Brown",
  name: "Sotis",
  weight: 3,
  cuteness: 99,
};

console.log(sotis);

const app = document.getElementById("app");

if (app) {
  app.innerHTML = "Lorem ipsum";
}

const secondDiv = document.getElementById("secondDiv") as HTMLDivElement;
secondDiv.innerHTML = "It works";

const theInputTag = document.getElementById("firstname");

if (theInputTag) {
  const input = theInputTag as HTMLInputElement;
  input.value = "Sebastian";
  //(theInputTag as HTMLInputElement).value = "Sebastian";
}
