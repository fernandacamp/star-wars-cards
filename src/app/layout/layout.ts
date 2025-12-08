import { Component } from '@angular/core';
import { CharacterCard } from "../components/characters/character-card/character-card";

@Component({
  selector: 'app-layout',
  imports: [CharacterCard],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
