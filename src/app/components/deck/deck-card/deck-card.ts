import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from "../../../shared/button/button";

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [Button],
  templateUrl: './deck-card.html',
  styleUrl: './deck-card.scss',
})
export class DeckCard {

  @Input() deck: any = {
    id: '1',
    name: 'Ordem Jedi',
    description: 'Deck focado em agilidade, sabres de luz e aliados da força.',
    cardsCount: 12,
    avgPower: 87,
    favorite: true,
    tags: ['Jedi', 'Light Side'],
  };
  @Output() view = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  @Output() favorite = new EventEmitter<string>();

  viewDeck() {
    this.view.emit(this.deck.id);
  }

  editDeck() {
    this.edit.emit(this.deck.id);
  }

  deleteDeck() {
    this.delete.emit(this.deck.id);
  }

  toggleFavorite() {
    this.favorite.emit(this.deck.id);
  }

}
