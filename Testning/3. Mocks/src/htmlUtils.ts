import type { Pokemon } from "./models/Pokemon";

// Funktion för att generera ett slumptal mellan 1 och 100
const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 100) + 1;
};

// Funktion för att skapa html
// Ta emot en pokemon som innehåller objektet vi skall visa
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

  // Om slumptalet är större än 10
  if (getRandomNumber() > 10) {
    // Presentera den vanliga bilden
    img.src = pokemon.sprites.front_default;
  } else {
    // Annars, presentera en shiny bild
    img.src = pokemon.sprites.front_shiny;
  }

  img.alt = pokemon.name;
  imgContainer.appendChild(img);

  container?.appendChild(name);
  container?.appendChild(imgContainer);
  container?.appendChild(typeList);
};

// Funktion för att skapa ett felmeddelande, om vi inte
// hittade en pokemon
export const createErrorHtml = () => {
  const container = document.getElementById("pokemon");

  if (container) {
    const error = document.createElement("div");
    error.className = "error";
    error.innerHTML = "Oj oj oj, nu blev det fel i backend :)";
    container.appendChild(error);
  }
};
