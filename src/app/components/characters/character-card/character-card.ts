import { Component } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-character-card',
  imports: [Button, MatIconModule],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCard {

}
