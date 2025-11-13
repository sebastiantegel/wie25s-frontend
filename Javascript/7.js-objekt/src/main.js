import "./style.css";

const handleClick = (fruit) => {
  console.log(`Du klickade ${fruit}`);
  cart.push(fruit);
  console.log(cart);
};

const cart = [];
const fruits = ["Banan", "Äpple", "Päron", "Sharonfrukt"];

fruits.push("Papaya");

const ul = document.createElement("ul");
// const ul = document.getElementById("fruits");

for (let i = 0; i < fruits.length; i++) {
  // <li></li>
  const li = document.createElement("li");

  li.className = "fruit"; // <li class="fruit"></li>
  li.innerHTML = fruits[i]; // <li class="fruit">Banan</li>

  li.addEventListener("click", () => {
    handleClick(fruits[i]);
  }); // -Click- -> <li class="fruit">Banan</li>

  ul.appendChild(li); // <ul><li class="fruit">Banan</li></ul>
}

const app = document.getElementById("app");
app.appendChild(ul);

// ------------------------------------------------------
class Person {
  name;
  age;
  isMarried;

  constructor(firstName, theAge, married) {
    this.age = theAge;
    this.name = firstName;
    this.isMarried = married;
  }
}

const me = new Person("Sebastian", 46, true);
// me = { name: "Sebastian", age: 46, isMarried: true }

const wife = new Person("Hanna", 45, true);
// wife = { name: "Hanna", age: 45, isMarried: true }

const daugther = new Person("Astrid", 15, false);
const son = new Person("Alvar", 15, false);

const persons = [me, wife, daugther, son];

for (let i = 0; i < persons.length; i++) {
  const personContainer = document.createElement("div");
  const nameTag = document.createElement("h2");
  const ageTag = document.createElement("p");

  nameTag.innerHTML = persons[i].name;
  ageTag.innerHTML = persons[i].age;

  personContainer.className = "person";

  personContainer.appendChild(nameTag);
  personContainer.appendChild(ageTag);

  document.body.appendChild(personContainer);
}
