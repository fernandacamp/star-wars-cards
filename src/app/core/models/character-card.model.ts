import { CharacterType } from "../enums/character-type.enum";

export interface CharacterCard {
  id: string;
  name: string;
  type: CharacterType;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  height: string;     
  mass: string;    
  gender: string;
  birthYear?: string;
  filmsCount: number;
  rawUrl: string;     
}