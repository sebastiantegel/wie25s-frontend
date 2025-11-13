import type { MovieExt } from "../models/MovieExt";
import type { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = `http://omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}&`;

export const getMovies = async (searchText: string) => {
  const response = await get<OmdbResponse>(`${BASE_URL}s=${searchText}`);
  return response.Search;
};

export const getMovieById = async (id: string) => {
  return await get<MovieExt>(`${BASE_URL}i=${id}`);
};

// export const createMovie = async () => {
//   axios.post();
// };
// export const updateMovie = async () => {
//   axios.put();
// };
// export const deleteMovie = async () => {
//   axios.delete();
// };
