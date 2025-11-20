import type { Movie } from "../models/Movie";

export const createHtml = (movies: Movie[]) => {
  const container = document.getElementById("searchResult");

  if (container) {
    container.innerHTML = "";
  }

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const title = document.createElement("h2");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");

    title.innerHTML = movie.Title;
    img.src = movie.Poster;
    img.alt = movie.Title;

    imgContainer.appendChild(img);
    movieContainer.appendChild(title);
    movieContainer.appendChild(imgContainer);

    container?.appendChild(movieContainer);
  });
};
