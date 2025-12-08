import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { CharacterListPage } from './components/characters/character-list-page/character-list-page';
import { DeckListPage } from './components/deck/deck-list-page/deck-list-page';
import { DeckDetailsPage } from './components/deck/deck-details-page/deck-details-page';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: '', component: CharacterListPage,},
            { path: 'decks', component: DeckListPage,},
            { path: 'decks/:id', component: DeckDetailsPage,},
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ],
    },
];
