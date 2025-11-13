import "./style.css";
import { getMovies } from "./services/movieService";
import { createHtml } from "./htmlUtils";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("searchText");

  let searchText = "";
  if (theInput) {
    searchText = (theInput as HTMLInputElement).value;
  }

  const movies = await getMovies(searchText);
  createHtml(movies);

  (document.getElementById("searchText") as HTMLInputElement).value = "";
});
