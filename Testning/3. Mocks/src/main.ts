import { createErrorHtml, createHtml } from "./htmlUtils";
import { searchPokemon } from "./services/PokemonService";
import "./style.css";

// Hitta formuläret och lyssna efter submit
document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  // Avbryt standardfunktionalitet för formulär
  e.preventDefault();

  // Hitta vår <input type="text" id="searchText" />
  const theInput = document.getElementById("searchText");

  // Skapa en variabel som skall innehålla vår söktext
  let searchText = "";

  // Om vi hittade <input>-taggen
  if (theInput) {
    // Plocka ut texten ur den och placera i vår variabel
    searchText = (theInput as HTMLInputElement).value;
  }

  // Om vår variabel fortfarande är tom här så har användaren inte skrivit
  // någonting. Avbryt då allt (ingen sökning görs)
  if (searchText == "") return;

  // Om vi kommer hit har användaren skrivit någonting i
  // textrutan. Gör nu vår sökning...
  const pokemon = await searchPokemon(searchText);

  // Om vi hittade en pokemon
  if (pokemon) {
    // Presentera den
    createHtml(pokemon);
  } else {
    // Annars, skapa ett felmeddelande
    createErrorHtml();
  }
});
