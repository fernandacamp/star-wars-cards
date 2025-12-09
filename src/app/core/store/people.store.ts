import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { SwapiService } from "../services/swapi.service";
import { CharacterCardModel } from "../models/character-card.model";
import { ListResponse } from "../models/list-reponse.model";
import { Person } from "../models/person.model";
import { mapPersonToCard } from "../mapper/person.mapper";

@Injectable({
    providedIn: 'root',
})
export class PeopleStore {
    private readonly swapi = inject(SwapiService);
    private readonly _characters = signal<CharacterCardModel[]>([]);
    private readonly _loading = signal<boolean>(false);
    private readonly _error = signal<string | null>(null);
    private readonly _filter = signal<string>('all');

    private readonly _page = signal<number>(1);
    private readonly _totalPages = signal<number>(1);
    private readonly _totalItems = signal<number>(0);
    private readonly _search = signal<string>('');

    private readonly PAGE_SIZE = 10;

    readonly characters = computed(() => this._characters());
    readonly loading = computed(() => this._loading());
    readonly error = computed(() => this._error());
    readonly page = computed(() => this._page());
    readonly totalPages = computed(() => this._totalPages())
    readonly search = computed(() => this._search());
    readonly filter = computed(() => this._filter());

    readonly filteredCharacteres = computed(() => {
        const searchTerm = this._search().toLowerCase();
        const filter = this._filter();

        let characters = this._characters();

        if (searchTerm) characters = characters.filter(c => c.name.toLowerCase().includes(searchTerm));
        if (filter !== 'all') characters = characters.filter(c => c.type === filter);

        return characters;
    });

    readonly totalItems = computed(() => this.filteredCharacteres().length);

    readonly charactersPage = computed(() => {
        const page = this._page();
        const pageSize = this.PAGE_SIZE;

        const filtered = this.filteredCharacteres(); 

        const start = (page - 1) * pageSize;
        const end = start + pageSize;

        return filtered.slice(start, end);
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

    setFilter(filter: string) {
        this._filter.set(filter);
        this._page.set(1);
    }


    private loadPage(page: number) {
        this._loading.set(true);
        this._error.set(null);

        this.swapi.getPeople(page).subscribe({
            next: (response: ListResponse<Person>) => {
                if (!response || !Array.isArray(response.results)) {
                    console.error('Resposta inesperada do getPeople:', response);
                    this._characters.set([]);
                    this._totalPages.set(1);
                    this._error.set('Erro ao carregar personagens.');
                    this._loading.set(false);
                    return;
                }

                const cards = response.results.map((person: Person) =>
                    mapPersonToCard(person),
                );
                this._characters.set(cards);

                const totalItems =
                    typeof response.count === 'number'
                        ? response.count
                        : response.results.length;

                const totalPages = Math.max(1, Math.ceil(totalItems / this.PAGE_SIZE));

                this._totalItems.set(totalItems);
                this._totalPages.set(totalPages);

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