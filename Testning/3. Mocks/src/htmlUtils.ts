import type { Pokemon } from "./models/Pokemon";

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 100) + 1;
};

export const createHtml = (pokemon: Pokemon) => {
  const container = document.getElementById("pokemon");

  if (container) {
    container.innerHTML = "";
  }

  const name = document.createElement("h2");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");

  const typeList = document.createElement("ul");

  pokemon.types.forEach((type) => {
    const li = document.createElement("li");
    li.innerHTML = type.type.name;
    typeList.appendChild(li);
  });

  name.innerHTML = pokemon.name;

  if (getRandomNumber() > 10) {
    img.src = pokemon.sprites.front_default;
  } else {
    img.src = pokemon.sprites.front_shiny;
  }

  img.alt = pokemon.name;
  imgContainer.appendChild(img);

  container?.appendChild(name);
  container?.appendChild(imgContainer);
  container?.appendChild(typeList);
};
