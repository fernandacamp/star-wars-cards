import { CharacterType } from "../enums/character-type.enum";


export interface CharacterDetail{
  id: string;
  name: string;
  type: CharacterType;
  description?: string;
  height: string;
  mass: string;
  gender: string;
  birthYear: string;
  homeworldName?: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  films: string[];     
  species: string[];   
  vehicles: string[];   
  starships: string[];  
}
