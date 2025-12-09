import { Component } from '@angular/core';
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
