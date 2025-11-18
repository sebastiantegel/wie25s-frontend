import type { Pokemon } from "../models/Pokemon";

export const searchPokemon = async (name: string) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const data: Pokemon = await response.json();

  return data;
};
