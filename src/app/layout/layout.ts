import { Component } from '@angular/core';
import { CharacterCard } from "../components/characters/character-card/character-card";
import { CharacterListPage } from "../components/characters/character-list-page/character-list-page";
import { CharacterDetailPage } from "../components/characters/character-detail-page/character-detail-page";
import { DeckCard } from "../components/deck/deck-card/deck-card";

@Component({
  selector: 'app-layout',
  imports: [DeckCard],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
