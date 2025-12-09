import { Component, inject } from '@angular/core';
import { CharacterCard } from '../character-card/character-card';
import { Pagination } from "../../../shared/pagination/pagination";
import { Button } from "../../../shared/button/button";
import { FavoriteStore } from '../../../core/store/favorite.store';
import { DeckStore } from '../../../core/store/deck.store';
import { Router } from '@angular/router';
import { PeopleStore } from '../../../core/store/people.store';
import { SearchBar } from "../../../shared/search-bar/search-bar";

@Component({
  selector: 'app-character-list-page',
  standalone: true,
  imports: [Pagination, Button, CharacterCard, SearchBar],
  templateUrl: './character-list-page.html',
  styleUrl: './character-list-page.scss',
})
export class CharacterListPage {

  pageSize: number = 10;

  isLoading: boolean = false;

  favoriteStore = inject(FavoriteStore);
  deckStore = inject(DeckStore);
  peopleStore = inject(PeopleStore);

  private router = inject(Router);

  selectedDeckId: string | null = null;

  get characters() {
    return this.peopleStore.charactersPage();
  }

  get currentPage() {
    return this.peopleStore.page();
  }

  get totalItems() {
    return this.peopleStore.totalItems();
  }

  onFavoriteToggle(characterId: string) {
    this.favoriteStore.toggleFavorite(characterId);
  }

  onAddToDeck(characterId: string) {
    if (!this.selectedDeckId) return;
    this.deckStore.addMemberToDeck(this.selectedDeckId, characterId);
  }

  goToDetails(characterId: string) {
    this.router.navigate(['/characters', characterId]);
  }

  onPageChange(newPage: number) {
    this.peopleStore.setPage(newPage);
  }

  onSearchChange(searchTerm: string) {
    this.peopleStore.setSearch(searchTerm);
    this.peopleStore.setPage(1);
  }

  onFilterChange(filter: string) {
    this.peopleStore.setFilter(filter);
    this.peopleStore.setPage(1);
  }


}
