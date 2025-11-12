import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landingPage/landingPagecomponent';

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  // { path: 'paleta', loadComponent: () => import('./components/paleta/paleta.component').then(m => m.PaletaComponent) },
  // { path: 'hero', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
  // { path: 'convertidor', loadComponent: () => import('./components/convertidor/convertidor.component').then(m => m.ConvertidorComponent) },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: ''}
];
