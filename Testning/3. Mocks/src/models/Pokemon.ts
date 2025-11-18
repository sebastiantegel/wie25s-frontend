import type { Sprites } from "./Sprites";
import type { Type } from "./Type";

export type Pokemon = {
  height: number;
  id: number;
  name: string;
  order: number;
  weight: number;
  sprites: Sprites;
  types: Type[];
};
