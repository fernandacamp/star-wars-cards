import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { StorageService } from "../services/storage.service";

@Injectable({
    providedIn: 'root',
})
export class FavoriteStore {
    private readonly storage = inject(StorageService);
    private readonly STORAGE_KEY = 'sw-favorites';
    private readonly _favoritesIds = signal<string[]>([]);

    readonly favoritesIds = computed(() => this._favoritesIds());
    readonly favoritesCount = computed(() => this._favoritesIds().length);

    constructor() {
        this.loadFromStorage();

        effect(() => {
            const ids = this._favoritesIds();
            this.storage.setItem<string[]>(this.STORAGE_KEY, ids);
        });
    }

    toggleFavorite(id: string) {
        const currentIds = this._favoritesIds();
        const index = currentIds.indexOf(id);

        if (index !== -1) {
            this._favoritesIds.set(currentIds.filter((x) => x !== id));
        } else {
            this._favoritesIds.set([...currentIds, id]);
        }
    }

    isFavorite(id: string): boolean {
        return this._favoritesIds().includes(id);
    }

    clearFavorites(): void {
        this._favoritesIds.set([]);
    }

    private loadFromStorage(): void {
        const saved = this.storage.getItem<string[]>(this.STORAGE_KEY);
        if (saved && Array.isArray(saved)) {
            this._favoritesIds.set(saved);
        }
    }

}