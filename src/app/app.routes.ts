import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'paleta', loadComponent: () => import('./components/paleta/paleta.component').then(m => m.PaletaComponent) },
  { path: 'hero', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
  { path: 'prueba', loadComponent: () => import('./prueba/prueba').then(m => m.Prueba) },
  { path: 'prueba2', loadComponent: () => import('./prueba2/prueba2').then(m => m.Prueba2) },
  { path: '**', redirectTo: ''}
];
