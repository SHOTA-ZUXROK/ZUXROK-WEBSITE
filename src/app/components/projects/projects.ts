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
      name: 'LIFEREALM (0.1.1)',
      description: 'Discover LIFEREALM with its newly updated visuals. The game now features a more vibrant environment, detailed landscapes, and enhanced lighting, offering a truly immersive visual experience.',
      downloadLink: 'https://drive.google.com/file/d/1_qHYMcZQyc6vaLlokPTecawejVVz7XoS/view?usp=sharing'
    },
    {
      name: 'LIFEREALM (0.1.0)',
      description: 'Explore the early stages of LIFEREALM, a game designed to showcase beautiful and immersive worlds with vibrant terrains, lush grass, and stunning skies.',
      downloadLink: 'https://drive.google.com/file/d/1h0m2DOSzbo1F82SZeQZWxYuAFVXegtD-/view?usp=sharing'
    },
    {
      name: 'Game-1 (0.1.0)',
      description: 'Dive into my very first Unity game! Explore a foundational terrain, encounter an early bear character, and step into the shoes of the player in this initial build!',
      downloadLink: 'https://drive.google.com/file/d/18Ih9nv4xze9lmsPLbKa76W9x5y7wBYbM/view?usp=sharing'
    }
  ];

  downloadGame(link: string): void {
    window.open(link, '_blank');
  }
}
