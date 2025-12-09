import { FavoriteStore } from './../../../core/store/favorite.store';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { MatIconModule } from '@angular/material/icon';
import { required } from '@angular/forms/signals';
import { CharacterCardModel } from '../../../core/models/character-card.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [Button, MatIconModule, NgClass],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCard {

  @Input({ required: true }) character!: CharacterCardModel;
  @Input() isFavorite: boolean = false;

  @Output() toggleFavorite = new EventEmitter<string>();
  @Output() addToDeck = new EventEmitter<string>();
  @Output() details = new EventEmitter<string>();

  onToggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.toggleFavorite.emit(this.character.id);
  }

  onAddToDeck() {
    this.addToDeck.emit(this.character.id);
  }

  onDetails() {
    this.details.emit(this.character.id);
  }

  get cardTypeClass(): string {
    return `sw-card--${this.character.type.toLowerCase()}`;
  }

  get initial(): string {
    return this.character.name?.charAt(0).toUpperCase() ?? '?';
  }

}
