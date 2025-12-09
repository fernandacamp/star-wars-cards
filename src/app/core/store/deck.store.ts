import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { Deck } from "../models/deck.model";

@Injectable({
    providedIn: 'root',
})
export class DeckStore {

    private readonly storage = inject(StorageService);
    private readonly STORAGE_KEY = 'sw-deck';
    private readonly _decks = signal<Deck[]>([]);

    readonly decks = computed(() => this._decks());
    readonly decksCount = computed(() => this._decks().length);

    constructor() {
        this.loadFromStorage();

        effect(() => {
            const decks = this._decks();
            this.storage.setItem<Deck[]>(this.STORAGE_KEY, decks);
        });
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    getDeckById(id: string): Deck | undefined {
        return this._decks().find(deck => deck.id === id);
    }

    /**
     * 
     * @param name 
     * @param description 
     * @returns 
     */
    createDeck(name: string, description?: string): Deck {
        const now = new Date().toISOString();
        const newDeck: Deck = {
            id: this.generateId(),
            name: name.trim() || 'Novo Deck',
            description: description?.trim(),
            memberIds: [],
            createdAt: now,
            updatedAt: now,
        };

        this._decks.update((current) => [...current, newDeck]);
        return newDeck;
    }

    /**
     * 
     * @param id 
     * @param name 
     * @returns 
     */
    updateDeck(id: string, name: string): void {
        const trimmed = name.trim();
        if (!trimmed) return;

        this._decks.update((current) =>
            current.map((deck) =>
                deck.id === id ? { ...deck, name: trimmed, updatedAt: new Date().toISOString() } : deck
            )
        );
    }

    /**
     * 
     * @param id 
     */
    deleteDeck(id: string): void {
        this._decks.update((current) => current.filter((deck) => deck.id !== id));
    }

    /**
     * 
     * @param deckId 
     * @param caracterId 
     */
    addMemberToDeck(deckId: string, caracterId: string): void {
        this._decks.update((current) =>
            current.map((deck) => {
                if (deck.id !== deckId) return deck;

                if (deck.memberIds.includes(caracterId)) return deck;

                return {
                    ...deck,
                    memberIds: [...deck.memberIds, caracterId],
                    updatedAt: new Date().toISOString()
                };
            }),
        );
    }

    /**
     * 
     * @param deckId 
     * @param caracterId 
     */
    removeMemberFromDeck(deckId: string, caracterId: string): void {
        this._decks.update((current) =>
            current.map((deck) =>
                deck.id === deckId ? {
                    ...deck,
                    memberIds: deck.memberIds.filter(id => id !== caracterId),
                    updatedAt: new Date().toISOString()
                } : deck
            ),
        );
    }

    /**
     * 
     * @param dackId 
     * @param characterId 
     * @returns 
     */
    isInDeck(dackId: string, characterId: string): boolean {
        const deck = this.getDeckById(dackId);
        if (!deck) return false;
        return deck.memberIds.includes(characterId);
    }

    private loadFromStorage(): void {
        const saved = this.storage.getItem<Deck[]>(this.STORAGE_KEY);
        if (saved && Array.isArray(saved)) {
            this._decks.set(saved);
        }
    }

    private generateId(): string {
        return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    }

}