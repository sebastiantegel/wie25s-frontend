import { searchMovies } from "./services/movieService";
import "./style.css";
import { createHtml } from "./utils/html";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Hitta ett htmlelement som har id searchText
  const theInput = document.getElementById("searchText");

  let searchText = "";

  // Om vi hittade elementet...
  if (theInput) {
    // Tolka html-elementet som en <input />
    // Hitta value (texten i rutan) och placera i variabel searchText
    searchText = (theInput as HTMLInputElement).value;
  }

  // Om det inte finns en text i textrutan, avbryt funktionen
  if (searchText === "") return;

  // Om vi kommer hit i koden, finns det en text i textrutan, sök då efter filmer
  const movies = await searchMovies(searchText);
  createHtml(movies);
});
