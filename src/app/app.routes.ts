import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { NewsComponent } from './components/news/news';
import { ProjectsComponent } from './components/projects/projects';
import { GalleryComponent } from './components/gallery/gallery';
import { DreamComponent } from './components/dream/dream';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'dream', component: DreamComponent },
  { path: '**', redirectTo: '/home' }
];
