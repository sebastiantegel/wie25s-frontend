import type { Movie } from "./models/Movie";
import type { OmdbResponse } from "./models/OmdbResponse";

// Funktion som tar emot en lista med filmer
export const createHtml = (movies: Movie[]) => {
  // Hitta <section id='movies'></section> från DOM:en
  const moviesSection = document.getElementById("movies");

  // Om vi hittade <section id='movies'></section>
  if (moviesSection) {
    // Töm elementet på innehåll (Detta gör vi för att
    // förhindra dubletter senare)
    moviesSection.innerHTML = "";
  }

  // Loopa igenom listan
  movies.forEach((movie) => {
    // Skapa element...
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const imageContainer = document.createElement("div");
    const img = document.createElement("img");

    // Lägg till innehåll i våra nyskapade element...
    title.innerHTML = movie.Title;
    img.src = movie.Poster;
    img.alt = movie.Title;

    // Placera element
    imageContainer.appendChild(img); // <div><img src='...' alt='...' /></div>
    container.appendChild(title); // <div><h2>Star Wars</h2></div>
    container.appendChild(imageContainer); // <div><h2>Star Wars</h2><div><img src='...' alt='...' /></div></div>
    moviesSection?.appendChild(container); // <section><div><h2>Star Wars</h2><div><img src='...' alt='...' /></div></div></section>
  });
};

export const getMovies = async (titleToSearchFor: string) => {
  // Anropa omdb och fråga efter de tio första
  // filmerna som innehåller titeln 'star'
  // fetch(`http://omdbapi.com?apikey=416ed51a&s=${titleToSearchFor}`)
  //   .then((response) => response.json())
  //   .then((data: OmdbResponse) => {});

  const response = await fetch(
    `http://omdbapi.com?apikey=416ed51a&s=${titleToSearchFor}`
  );
  const data: OmdbResponse = await response.json();

  localStorage.setItem("movies", JSON.stringify(data.Search));

  return data.Search;
};
