import { Component, DestroyRef, effect, EventEmitter, inject, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true, 
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {

  @Input() placeholder: string = '';
  @Input() debounceTime: number = 300;
  @Output() search = new EventEmitter<string>();

  readonly value = signal<string>('');
  private debounceId: any;
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.debounceId) clearTimeout(this.debounceId);
    })
    effect(() => {
      const term = this.value();

      if (this.debounceId) {
        clearTimeout(this.debounceId);
      }

      this.debounceId = setTimeout(() => {
        this.search.emit(term.trim());
      }, this.debounceTime);
    });
  }

  onInputChange(term: string) {
    this.value.set(term);
  }

  onEnter() {
    const term = this.value().trim();
    this.search.emit(term);
  }

  onClear() {
    this.value.set(''); 
    this.search.emit(''); 
  }

}
