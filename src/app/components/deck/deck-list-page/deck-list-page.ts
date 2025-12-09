import { Component, inject } from '@angular/core';
import { CharacterCard } from "../../characters/character-card/character-card";
import { Button } from "../../../shared/button/button";
import { Pagination } from "../../../shared/pagination/pagination";
import { DeckCard } from "../deck-card/deck-card";
import { Deck } from '../../../core/models/deck.model';
import { DeckStore } from '../../../core/store/deck.store';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { SnackbarType } from '../../../core/enums/snackbarType.enum';

@Component({
  selector: 'app-deck-list-page',
  standalone: true,
  imports: [Pagination, DeckCard, Button],
  templateUrl: './deck-list-page.html',
  styleUrl: './deck-list-page.scss',
})
export class DeckListPage {

  private deckStore = inject(DeckStore)
  snackbar = inject(SnackbarService);
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading: boolean = false;

  get decks(): Deck[] {
    return this.deckStore.decks();
  }

  get totalItems(): number {
    return this.deckStore.decksCount();
  }

  get pagedDecks(): Deck[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = this.currentPage * this.pageSize;
    return this.decks.slice(start, end);
  }

  pageChange(newPage: number): void {
    this.currentPage = newPage;
  }

  createDeck() {
    try {
      const deck = this.deckStore.createDeck('Novo Deck');

      if (!deck) {
        throw new Error('Erro inesperado ao criar o deck.');
      }

      this.snackbar.show(
        `Deck "${deck.name}" criado com sucesso!`,
        SnackbarType.Success
      );

      this.currentPage = Math.ceil(this.totalItems / this.pageSize);

    } catch (err) {
      this.snackbar.show(
        'Não foi possível criar o deck.',
        SnackbarType.Error
      );
    }
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

}
