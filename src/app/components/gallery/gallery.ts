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
