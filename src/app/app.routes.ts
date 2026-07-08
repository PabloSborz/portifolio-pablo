import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { Contato } from './feats/contato/contato';
import { Sobremim } from './feats/sobremim/sobremim';
import { Projetos } from './feats/projetos/projetos';
import { NotFound } from './feats/not-found/not-found';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'sobremim', component: Sobremim},
    {path: 'projetos', component: Projetos},
    {path: 'contato', component: Contato},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFound},
];
