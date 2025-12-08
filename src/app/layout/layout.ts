import { Component } from '@angular/core';
import { CharacterCard } from "../components/characters/character-card/character-card";
import { CharacterListPage } from "../components/characters/character-list-page/character-list-page";
import { CharacterDetailPage } from "../components/characters/character-detail-page/character-detail-page";

@Component({
  selector: 'app-layout',
  imports: [CharacterDetailPage],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
