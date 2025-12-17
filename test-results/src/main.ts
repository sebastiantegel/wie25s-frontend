import { Movie } from "./models/Movie";
import "./style.css";

// 16.
const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
const moviesFromOmdb = await response.json();

const movies: Movie[] = moviesFromOmdb.Search.map(
  (m: any) => new Movie(m.Title, m.Poster, m.imdbID)
);

console.log(movies);

// 17.
export const searchMovies = async (search: string): Promise<IMovie[]> => {
  let response = await fetch(`http://omdbapi.com?s=${search}&apikey=416ed51a`);
  let data: IOmdbResponse = await response.json();

  return data.Search;
};

const moviesAgain = await searchMovies("star");
// MoviesAgain kommer att vara ett list av datatypen IMovie[]

// 18. Linjärsökning - Hitta talet 9
const numbers = [1, 1, 3, 6, 9, 13];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 9) {
    break;
  }
}
