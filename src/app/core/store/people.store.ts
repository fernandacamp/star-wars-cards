import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { SwapiService } from "../services/swapi.service";
import { CharacterCard } from "../models/character-card.model";
import { ListResponse } from "../models/list-reponse.model";
import { Person } from "../models/person.model";
import { mapPersonToCard } from "../mapper/person.mapper";

@Injectable({
    providedIn: 'root',
})
export class PeopleStore {
    private readonly swapi = inject(SwapiService);
    private readonly _characters = signal<CharacterCard[]>([]);
    private readonly _loading = signal<boolean>(false);
    private readonly _error = signal<string | null>(null);

    private readonly _page = signal<number>(1);
    private readonly _totalPages = signal<number>(1);
    private readonly _search = signal<string>('');

    private readonly PAGE_SIZE = 10;

    readonly characters = computed(() => this._characters());
    readonly loading = computed(() => this._loading());
    readonly error = computed(() => this._error());
    readonly page = computed(() => this._page());
    readonly totalPages = computed(() => this._totalPages())
    readonly search = computed(() => this._search());

    readonly filteredCharacteres = computed(() => {
        const searchTerm = this._search().toLowerCase();
        const allCharacters = this._characters();
        if (!searchTerm) return allCharacters;

        return allCharacters.filter(character =>
            character.name.toLowerCase().includes(searchTerm)
        );
    });

    constructor() {
        effect(() => {
            const page = this._page();
            this.loadPage(page);
        });
    }

    setSearch(term: string) {
        this._search.set(term);
    }

    nextPage() {
        const currentPage = this._page();
        const total = this._totalPages();

        if (currentPage < total) {
            this._page.set(currentPage + 1);
        }
    }

    previousPage() {
        const currentPage = this._page();
        if (currentPage > 1) {
            this._page.set(currentPage - 1);
        }
    }

    setPage(page: number) {
        if (page < 1) return;
        const total = this._totalPages();
        if (page > total) return;
        this._page.set(page);
    }

    private loadPage(page: number) {
        this._loading.set(true);
        this._error.set(null);

        this.swapi.getPeople(page).subscribe({
            next: (response: ListResponse<Person>) => {
                const cards = response.results.map((person) =>
                    mapPersonToCard(person),
                );
                this._characters.set(cards);
                const totalItems = Math.max(
                    1,
                    Math.ceil(response.count / this.PAGE_SIZE),
                );
                this._totalPages.set(totalItems);
                this._loading.set(false);
            },
            error: (error) => {
                console.error('Erro ao carregar pessoas', error);
                this._error.set('Erro ao carregar personagens.');
                this._loading.set(false);
            },
        });
    }
}