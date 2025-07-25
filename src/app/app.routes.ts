import { Routes } from '@angular/router';
import { News } from './news/news'; // Corrected import path and class name
import { App } from './app'; // Corrected import path and class name

export const routes: Routes = [
  { path: 'news', component: News }, // Use the News component
  { path: '', redirectTo: '#home', pathMatch: 'full' }, // Redirect root to #home section
  { path: '**', redirectTo: '' } // Redirect any unknown paths to the home route
];
