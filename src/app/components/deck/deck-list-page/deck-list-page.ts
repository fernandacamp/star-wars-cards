import { Component } from '@angular/core';
import { CharacterCard } from "../../characters/character-card/character-card";
import { Button } from "../../../shared/button/button";
import { Pagination } from "../../../shared/pagination/pagination";
import { DeckCard } from "../deck-card/deck-card";

@Component({
  selector: 'app-deck-list-page',
  standalone: true,
  imports: [Pagination, DeckCard, Button],
  templateUrl: './deck-list-page.html',
  styleUrl: './deck-list-page.scss',
})
export class DeckListPage {

  totalItems: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading: boolean = false;

  decks = [
    {
      id: '1',
      name: 'Ordem Jedi',
      description: 'Deck focado em agilidade, sabres de luz e aliados da força.',
      cardsCount: 12,
      avgPower: 87,
      favorite: true,
      tags: ['Jedi', 'Light Side'],
    },
    {
      id: '2',
      name: 'Império Sith',
      description: 'Poder bruto, força sombria e ataques devastadores.',
      cardsCount: 10,
      avgPower: 95,
      favorite: false,
      tags: ['Sith', 'Dark Side'],
    },
    {
      id: '3',
      name: 'Tecnologia Droid',
      description: 'Unidades droides otimizadas para suporte e controle.',
      cardsCount: 14,
      avgPower: 74,
      favorite: false,
      tags: ['Droid'],
    },
    {
      id: '4',
      name: 'Aliança Rebelde',
      description: 'Estratégias táticas e personagens de apoio.',
      cardsCount: 9,
      avgPower: 68,
      favorite: true,
      tags: ['Civilian', 'Rebels'],
    },
    {
      id: '5',
      name: 'Caçadores de Recompensa',
      description: 'Ataques rápidos e golpes surpresa.',
      cardsCount: 11,
      avgPower: 82,
      favorite: false,
      tags: ['Bounty Hunter'],
    },
    {
      id: '6',
      name: 'Conselho Jedi',
      description: 'Os mestres mais poderosos da galáxia.',
      cardsCount: 8,
      avgPower: 92,
      favorite: false,
      tags: ['Jedi'],
    },
  ];

  get pagedDecks() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = this.currentPage * this.pageSize;
    return this.decks.slice(start, end);
  }

  pageChange(newPage: number): void {
    this.currentPage = newPage;
    //chamar a funcao para carregar os dados da nova pagina
  }

  viewDeck() {
    console.log('Ver detalhes do deck');
  }
  editDeck() {
    console.log('Editar deck');
  }
  deleteDeck() {
    console.log('Deletar deck');
  }

  favoriteDeck() {
    console.log('Favoritar / desfavoritar deck');
  }

  createDeck() {
    console.log('Criar novo deck');
  }
}
