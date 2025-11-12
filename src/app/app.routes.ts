import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { PaletaComponent } from './components/paleta/paleta.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'paleta', component: PaletaComponent },
];
