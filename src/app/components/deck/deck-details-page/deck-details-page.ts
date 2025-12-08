import { Component } from '@angular/core';
import { CharacterCard } from "../../characters/character-card/character-card";
import { Button } from "../../../shared/button/button";

@Component({
  selector: 'app-deck-details-page',
  standalone: true,
  imports: [CharacterCard, Button],
  templateUrl: './deck-details-page.html',
  styleUrl: './deck-details-page.scss',
})
export class DeckDetailsPage {

   deck: any = {
    id: '1',
    name: 'Ordem Jedi',
    description: 'Deck focado em agilidade, sabres de luz e aliados da força.',
    cardsCount: 4,
    avgPower: 87,
    favorite: true,
    tags: ['Jedi', 'Light Side'],
  };

   deckCharacters = [
    {
      id: '1',
      name: 'Luke Skywalker',
      type: 'Jedi',
      hp: 130,
      attack: 95,
      defense: 80,
      speed: 110,
      height: '172',
      mass: '77',
      gender: 'male',
      filmsCount: 3,
    },
    {
      id: '2',
      name: 'Obi-Wan Kenobi',
      type: 'Jedi',
      hp: 125,
      attack: 90,
      defense: 85,
      speed: 100,
      height: '182',
      mass: '77',
      gender: 'male',
      filmsCount: 4,
    },
    {
      id: '3',
      name: 'Yoda',
      type: 'Jedi',
      hp: 140,
      attack: 88,
      defense: 95,
      speed: 105,
      height: '66',
      mass: '17',
      gender: 'male',
      filmsCount: 5,
    },
    {
      id: '4',
      name: 'Ahsoka Tano',
      type: 'Jedi',
      hp: 120,
      attack: 92,
      defense: 78,
      speed: 115,
      height: '170',
      mass: '55',
      gender: 'female',
      filmsCount: 2,
    },
  ];

  navigateBack(): void {
    console.log('Navega de volta para lista de decks');
  }

  editDeck(): void {
    console.log('Navega para a página de edição do deck');
  }

  deleteDeck(): void {
    console.log('Deleta o deck atual');
  }

  favoriteDeck(): void {
    console.log('Favorita o deck atual');
  }


}
