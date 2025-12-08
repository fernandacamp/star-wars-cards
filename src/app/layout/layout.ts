import { Component } from '@angular/core';
import { CharacterCard } from "../components/characters/character-card/character-card";
import { CharacterListPage } from "../components/characters/character-list-page/character-list-page";

@Component({
  selector: 'app-layout',
  imports: [CharacterListPage],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
