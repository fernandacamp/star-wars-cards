import { CharacterCard } from "../models/character-card.model";
import { Person } from "../models/person.model";
import { generateAttack, generateDefense, generateHp, generateSpeed, inferCharacterType } from "./stats/stats-shared";

export function mapPersonToCard(person: Person): CharacterCard {
    const id = extractIdFromUrl(person.url);

    const height = parseInt(person.height, 10) || 0;
    const mass = parseInt(person.mass, 10) || 0;

    return {
        id,
        name: person.name,
        type: inferCharacterType(person),
        hp: generateHp(height),
        attack: generateAttack(mass),
        defense: generateDefense(height, mass),
        speed: generateSpeed(height),
        height: person.height,
        mass: person.mass,
        gender: person.gender,
        birthYear: person.birth_year,
        filmsCount: person.films.length,
        rawUrl: person.url,
    };
}


function extractIdFromUrl(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
}
