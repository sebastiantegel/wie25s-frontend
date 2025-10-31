import type { Movie } from "./Movie";

export type OmdbResponse = {
  totalResults: string;
  Response: string;
  Search: Movie[];
};
