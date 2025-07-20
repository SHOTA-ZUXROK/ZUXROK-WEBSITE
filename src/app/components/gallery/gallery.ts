import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent {
  galleryItems = [
    {
      title: 'LIFEREALM (0.1.1)',
      description: 'Discover LIFEREALM with its newly updated visuals. The game now features a more vibrant environment, detailed landscapes, and enhanced lighting, offering a truly immersive visual experience.',
      imageUrl: 'assets/Picture_3.png'
    },
    {
      title: 'LIFEREALM (0.1.0)',
      description: 'Explore the early stages of LIFEREALM, a game designed to showcase beautiful and immersive worlds with vibrant terrains, lush grass, and stunning skies.',
      imageUrl: 'assets/Picture_2.png'
    },
    {
      title: 'Game-1 (0.1.0)',
      description: 'Take a first look at my debut Unity game! This initial version showcases a vibrant terrain, lush trees, and an early encounter with the bear.',
      imageUrl: '/assets/Picture_1.png'
    }
  ];

  getBackgroundImageStyle(imageUrl: string): Record<string, string> {
    return {
      'background-image': `url('${imageUrl}')`
    };
  }
}
