import { Component } from '@angular/core';
import { Button } from "../../../shared/button/button";

@Component({
  selector: 'app-character-detail-page',
  standalone: true,
  imports: [Button],
  templateUrl: './character-detail-page.html',
  styleUrl: './character-detail-page.scss',
})
export class CharacterDetailPage {
  character = {
    id: '1',
    name: 'Luke Skywalker',
    type: 'Jedi',
    hp: 130,
    attack: 95,
    defense: 80,
    speed: 110,
    height: '172',
    mass: '77',
    gender: 'male',
    birthYear: '19BBY',
    homeworld: 'Tatooine',
    films: [
      'Episode IV – A New Hope',
      'Episode V – The Empire Strikes Back',
      'Episode VI – Return of the Jedi',
    ],
    description:
      'Um fazendeiro de um planeta desértico que se torna um dos maiores Jedi da galáxia.',
  };

  onBack() {
    console.log('Voltar para lista');
  }

  onToggleFavorite() {
    console.log('Favoritar / desfavoritar');
  }

  onAddToDeck() {
    console.log('Adicionar ao deck');
  }

  onSimulateDuel() {
    console.log('Duelo simulado');
  }

}
