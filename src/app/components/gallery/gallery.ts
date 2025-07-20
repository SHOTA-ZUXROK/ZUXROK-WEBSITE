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
      imageUrl: 'assets/Picture_3.png'
    },
    {
      title: 'LIFEREALM (0.1.0)',
      imageUrl: 'assets/Picture_2.png'
    },
    {
      title: 'Game-1 (0.1.0)',
      imageUrl: '/assets/Picture_1.png'
    }
  ];

  getBackgroundImageStyle(imageUrl: string): Record<string, string> {
    return {
      'background-image': `url('${imageUrl}')`
    };
  }
}
