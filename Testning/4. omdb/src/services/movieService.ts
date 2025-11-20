import type { OmdbResponse } from "../models/OmdbResponse";

// Syftet med denna fil är att innehålla funktioner för
// hantering av filmer.
// Vi skall i denna fil ha funktioner för att:
// - Hämta
// - Skapa
// - Uppdatera
// - Ta bort

export const searchMovies = async (movies: string) => {
  // Gör anropet mot omdb:s api och sök efter filmer som innehåller titeln: movies
  const response = await fetch(
    "https://omdbapi.com/?apikey=416ed51a&s=" + movies
  );

  // Använd json för att göra om svaret från omdb till ett json-objekt
  // {
  //   Search: [{ Title: "", Poster: "", Year: "", imdbID: "", Type: ""}, {}, ...],
  //   totalResult: "4711",
  //   Response: "True"
  // }
  const data: OmdbResponse = await response.json();

  return data.Search;
};
