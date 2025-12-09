import { CharacterType } from "../../enums/character-type.enum";
import { Person } from "../../models/person.model";

export function inferCharacterType(person: Person): CharacterType {
    const n = person.name.toLowerCase();

    const matchRules: Record<CharacterType, string[]> = {
        [CharacterType.Sith]: ['vader', 'sidious', 'maul', 'tyranus', 'palpatine'],
        [CharacterType.Jedi]: ['skywalker', 'obi', 'yoda', 'kenobi', 'windu', 'qui-gon'],
        [CharacterType.Droid]: ['r2', 'c-3po', 'bb-', 'ig-'],
        [CharacterType.Civilian]: ['solo', 'organa', 'fett'], 
        [CharacterType.Unknown]: []
    };

    for (const type of Object.keys(matchRules) as CharacterType[]) {
        if (type === CharacterType.Unknown) continue;

        const rules = matchRules[type];
        if (rules.some(r => n.includes(r))) {
            return type;
        }
    }

    return CharacterType.Unknown;
}

export function generateHp(height: number): number {
    return Math.max(60, Math.min(180, height));
}

export function generateAttack(mass: number): number {
    return Math.max(40, Math.min(150, mass));
}

export function generateDefense(height: number, mass: number): number {
    return Math.max(40, Math.min(150, Math.floor((height + mass) / 2)));
}

export function generateSpeed(height: number): number {
    return Math.max(40, Math.min(150, 200 - height));
}
