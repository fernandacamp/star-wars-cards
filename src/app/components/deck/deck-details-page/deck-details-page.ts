import { PeopleStore } from './../../../core/store/people.store';
import { Component, inject, OnInit } from '@angular/core';
import { CharacterCard } from "../../characters/character-card/character-card";
import { Button } from "../../../shared/button/button";
import { FavoriteStore } from '../../../core/store/favorite.store';
import { CharacterCardModel } from '../../../core/models/character-card.model';
import { Deck } from '../../../core/models/deck.model';
import { DeckStore } from '../../../core/store/deck.store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deck-details-page',
  standalone: true,
  imports: [CharacterCard, Button],
  templateUrl: './deck-details-page.html',
  styleUrl: './deck-details-page.scss',
})
export class DeckDetailsPage implements OnInit {

  favoriteStore = inject(FavoriteStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private deckStore = inject(DeckStore);
  private peopleStore = inject(PeopleStore);

  characters: CharacterCardModel[] = [];
  deck: Deck | null = null;
  selectedDeckId: string | null = null;

  deckFavorite: boolean = false;
  tags: string[] = [];
  get avgPower(): number | null {
    if (!this.characters.length) return null;
    
    const totalPower = this.characters.reduce((acc, character) => {
      return acc + character.attack + character.defense + character.speed;
    }, 0);

    const avgPower = totalPower / this.characters.length / 3;
    return avgPower;
  }

  ngOnInit() {
    const deckId = this.route.snapshot.paramMap.get('id');

    if (!deckId) {
      console.error('Deck ID não encontrado na rota.');
      return;
    }

    const deck = this.deckStore.getDeckById(deckId);

    if (!deck) {
      console.error('Deck não encontrado.');
      return;
    }

    this.deck = deck;
    // deckFavorite
    this.loadDeckCharacters();
    this.buildTagsFromCharacter();

  }

  onAddToDeck(characterId: string) {
    console.log('Adicionar ao deck atual:', characterId);
  }

  goToCharacterDetails(characterId: string) {
    console.log('Ir para detalhes do personagem:', characterId);
  }

  navigateBack(): void {
    console.log('Navega de volta para lista de decks');
  }

  editDeck(): void {
    console.log('Navega para a página de edição do deck');
  }

  deleteDeck(): void {
    if(!this.deck) return;
    this.deckStore.deleteDeck(this.deck.id);
    this.navigateBack();
  }

  favoriteDeck(): void {
    console.log('Favorita o deck atual');
  }

  private loadDeckCharacters(): void {
    if (!this.deck) return;

    const allCharacters = this.peopleStore.characters();

    this.characters = allCharacters.filter(character =>
      this.deck?.memberIds.includes(character.id)
    );
  }

  private buildTagsFromCharacter(): void {
    const set = new Set<string>();

    this.characters.forEach(character => {
      if (character.type) set.add(character.type);
    });
    this.tags = Array.from(set);
  }


}
