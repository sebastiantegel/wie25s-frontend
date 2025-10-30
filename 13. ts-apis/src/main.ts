import type { Movie } from "./models/Movie";
import "./style.css";
import { createHtml, getMovies } from "./utils";

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();

  const theInputTag = document.getElementById("movieTitleToSearchFor");
  if (theInputTag) {
    const titleToSearchFor = (theInputTag as HTMLInputElement).value;

    movies = await getMovies(titleToSearchFor);
    createHtml(movies);
    (theInputTag as HTMLInputElement).value = "";
  }
};

let movies: Movie[] = JSON.parse(localStorage.getItem("movies") || "[]");

document
  .getElementById("movieSearchForm")
  ?.addEventListener("submit", handleSubmit);

createHtml(movies);
