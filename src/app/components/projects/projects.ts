import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  games = [
    {
      name: 'LIFEREALM (0.1.0)',
      description: 'Explore the early stages of LIFEREALM, a game designed to showcase beautiful and immersive worlds with vibrant terrains, lush grass, and stunning skies.',
      downloadLink: 'https://drive.google.com/file/d/11cXY-4Axp51xg7-EqV8XtKitWS6kwGXn/view?usp=sharing'
    },
    {
      name: 'Game-1 (0.1.0)',
      description: 'Dive into my very first Unity game! Explore a foundational terrain, encounter an early bear character, and step into the shoes of the player in this initial build!',
      downloadLink: 'https://drive.google.com/file/d/1oQrEjwF5Yom9lEpnIGBbiCZuJxGdfZgx/view?usp=sharing'
    }
  ];

  downloadGame(link: string): void {
    window.open(link, '_blank');
  }
}
