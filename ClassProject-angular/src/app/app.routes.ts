import { Routes } from '@angular/router';
import { Futbol } from './vistas/futbol/futbol';
import { Carreras } from './vistas/carreras/carreras';

export const routes: Routes = [
  { path: '', redirectTo: 'futbol', pathMatch: 'full' },
  { path: 'futbol', component: Futbol },
  { path: 'carreras', component: Carreras }
];