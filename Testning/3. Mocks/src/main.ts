import { createHtml } from "./htmlUtils";
import { searchPokemon } from "./services/PokemonService";
import "./style.css";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("searchText");

  let searchText = "";
  if (theInput) {
    searchText = (theInput as HTMLInputElement).value;
  }

  if (searchText == "") return;

  const pokemon = await searchPokemon(searchText);
  createHtml(pokemon);
});
