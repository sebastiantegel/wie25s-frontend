import type { Pokemon } from "../models/Pokemon";

// Funkction för att söka efter en pokemon
export const searchPokemon = async (name: string) => {
  // Gör en fetch
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);

  // om det gick bra (status: 200-299)
  if (response.ok) {
    // Tolka datat som en Pokemon
    const data: Pokemon = await response.json();

    // Skicka tillbaka vår data (pokemon)
    return data;
  } else {
    // Om det inte gick bra, skicka tillbaka null
    return null;
  }
};
