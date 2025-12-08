import { Component } from '@angular/core';
import { CharacterCard } from "../components/characters/character-card/character-card";
import { CharacterListPage } from "../components/characters/character-list-page/character-list-page";
import { CharacterDetailPage } from "../components/characters/character-detail-page/character-detail-page";
import { DeckCard } from "../components/deck/deck-card/deck-card";
import { DeckDetailsPage } from "../components/deck/deck-details-page/deck-details-page";
import { DeckListPage } from "../components/deck/deck-list-page/deck-list-page";
import { Button } from "../shared/button/button";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Button, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  appName = 'Star Wars Cards';
  favoriteCount: number = 5;

  goToDecks() {
    // Navigation logic to go to decks page
  }

  goHome() {  
    // Navigation logic to go to home page
  }

}
