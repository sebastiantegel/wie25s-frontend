import type { Movie } from "./models/Movie";
import type { MovieExt } from "./models/MovieExt";
import type { OmdbResponse } from "./models/OmdbResponse";
import "./style.css";

const getMovies = async (titleToSearchFor: string) => {
  const response = await fetch(
    "https://omdbapi.com/?apikey=416ed51a&s=" + titleToSearchFor,
  );
  const data: OmdbResponse = await response.json();

  return data.Search;
};

const getMovieById = async (id: string) => {
  const response = await fetch(`https://omdbapi.com/?apikey=416ed51a&i=${id}`);
  const data: MovieExt = await response.json();

  return data;
};

const createModalHtml = (movieDetails: MovieExt) => {
  const title = document.getElementById("staticBackdropLabel");
  if (title) {
    title.innerHTML = movieDetails.Title;
  }

  const body = document.getElementById("modalBody");

  if (body) {
    body.innerHTML = "";

    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const plot = document.createElement("p");
    const actors = document.createElement("p");

    img.src = movieDetails.Poster;
    img.alt = movieDetails.Title;
    plot.innerHTML = movieDetails.Plot;
    actors.innerHTML = movieDetails.Actors;

    imgContainer.appendChild(img);
    body.appendChild(imgContainer);
    body.appendChild(plot);
    body.appendChild(actors);
  }
};

const createHtml = (theMovieList: Movie[]) => {
  // Hämta <section></section> från DOM:en
  const moviesContainer = document.getElementById("movies");

  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  theMovieList.forEach((movie) => {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");

    container.className = "movie";
    container.setAttribute("data-bs-toggle", "modal");
    container.setAttribute("data-bs-target", "#staticBackdrop");
    title.innerHTML = movie.Title;
    img.src = movie.Poster;
    img.alt = movie.Title;
    imgContainer.appendChild(img);

    container.addEventListener("click", async () => {
      const movieDetails = await getMovieById(movie.imdbID);

      createModalHtml(movieDetails);
    });

    container.appendChild(title);
    container.appendChild(imgContainer);

    moviesContainer?.appendChild(container);
  });
};

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Hitta textrutan
  const inputTag = document.getElementById("titleToSearchFor");

  // Om vi inte hittade textrutan
  if (!inputTag) {
    // Avbryt
    return;
  }

  // Hitta texten i textrutan
  const userInput = (inputTag as HTMLInputElement).value;

  // Hämta filmer och skicka med texten från textrutan
  const movies = await getMovies(userInput);

  // Visa filmerna i DOM:en
  createHtml(movies);

  // Töm textrutan på text så vi kan söka efter nästa film på en gång
  (inputTag as HTMLInputElement).value = "";
});
