import type { Movie } from "./models/Movie";
import { getMovieById } from "./services/movieService";

export const createHtml = (movies: Movie[]) => {
  const moviesSection = document.getElementById("movies");

  if (moviesSection) {
    moviesSection.innerHTML = "";
  }

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");

    img.src = movie.Poster;
    img.alt = movie.Title;
    title.innerHTML = movie.Title;

    movieContainer.addEventListener("click", async () => {
      const movieExt = await getMovieById(movie.imdbID);
      console.log(movieExt);
    });

    imgContainer.appendChild(img);
    movieContainer.appendChild(title);
    movieContainer.appendChild(imgContainer);
    moviesSection?.appendChild(movieContainer);
  });
};

export const presentError = () => {
  const error = document.createElement("div");
  error.innerHTML =
    "Du måste ange minst två tecken i filmens titel. Om det inte fungerar, skriv fler tecken";
  document.getElementById("app")?.appendChild(error);
};
