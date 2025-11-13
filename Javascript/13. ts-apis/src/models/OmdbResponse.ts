import type { Movie } from "./Movie";

export type OmdbResponse = {
  //   Response: string;
  Search: Movie[];
  totalResults: string;
};
