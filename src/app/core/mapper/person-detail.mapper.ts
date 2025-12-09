import { CharacterType } from "../enums/character-type.enum";
import { CharacterDetail } from "../models/caracter-detail.model";
import { Films } from "../models/films.model";
import { Person } from "../models/person.model";
import { Planet } from "../models/planet.model";
import { Species } from "../models/species.model";
import { Starship } from "../models/starship.model";
import { Vehicle } from "../models/vehicle.model";
import { generateAttack, generateDefense, generateHp, generateSpeed, inferCharacterType } from "./stats/stats-shared";


export interface PersonDetailRelatedData {
  films: Films[];
  species: Species[];
  vehicles: Vehicle[];
  starships: Starship[];
  homeworld?: Planet | null;
}

export function mapPersonToDetail(
  person: Person,
  related: PersonDetailRelatedData,
): CharacterDetail {
  const id = extractIdFromUrl(person.url);
  const height = parseInt(person.height, 10) || 0;
  const mass = parseInt(person.mass, 10) || 0;

  const type: CharacterType = inferCharacterType(person);

  return {
    id,
    name: person.name,
    type,

    description: buildDescription(type, person),

    height: person.height,
    mass: person.mass,
    gender: person.gender,
    birthYear: person.birth_year,
    homeworldName: related.homeworld?.name,

    hp: generateHp(height),
    attack: generateAttack(mass),
    defense: generateDefense(height, mass),
    speed: generateSpeed(height),

    films: related.films.map((f) => f.title),
    species: related.species.map((s) => s.name),
    vehicles: related.vehicles.map((v) => v.name),
    starships: related.starships.map((s) => s.name),
  };
}

function extractIdFromUrl(url: string): string {
  return url.split('/').filter(Boolean).pop() ?? '';
}

function buildDescription(type: CharacterType, person: Person): string {
  const base = `${person.name} é um personagem do universo Star Wars.`;

  switch (type) {
    case 'Jedi':
      return `${base} Conhecido por sua ligação com a Força e treinamento Jedi.`;
    case 'Sith':
      return `${base} Alinhado ao lado sombrio da Força, com grande poder destrutivo.`;
    case 'Droid':
      return `${base} Um dróide com funções específicas dentro da galáxia.`;
    default:
      return base;
  }
}
