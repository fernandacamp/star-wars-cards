import { Component } from '@angular/core';
import { CharacterCard } from '../character-card/character-card';
import { Pagination } from "../../../shared/pagination/pagination";
import { Button } from "../../../shared/button/button";

@Component({
  selector: 'app-character-list-page',
  standalone: true,
  imports: [Pagination, Button, CharacterCard],
  templateUrl: './character-list-page.html',
  styleUrl: './character-list-page.scss',
})
export class CharacterListPage {

  totalItems: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading: boolean = false;

  characters = [
    {
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
      filmsCount: 3,
    },
    {
      id: '2',
      name: 'Darth Vader',
      type: 'Sith',
      hp: 160,
      attack: 120,
      defense: 100,
      speed: 70,
      height: '202',
      mass: '120',
      gender: 'male',
      filmsCount: 4,
    },
    {
      id: '3',
      name: 'R2-D2',
      type: 'Droid',
      hp: 110,
      attack: 60,
      defense: 90,
      speed: 80,
      height: '96',
      mass: '32',
      gender: 'n/a',
      filmsCount: 5,
    },
    {
      id: '4',
      name: 'Leia Organa',
      type: 'Civilian',
      hp: 120,
      attack: 85,
      defense: 75,
      speed: 95,
      height: '150',
      mass: '49',
      gender: 'female',
      filmsCount: 3,
    },
  ];

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    // chamar a função de carregamento de dados aqui
  }
  
}
