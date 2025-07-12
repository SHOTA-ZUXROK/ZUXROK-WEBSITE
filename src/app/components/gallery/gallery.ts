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
      title: 'Placeholder 1',
      description: 'Placeholder Text 1'
    },
    {
      title: 'Placeholder 2',
      description: 'Placeholder Text 2'
    },
    {
      title: 'Placeholder 3',
      description: 'Placeholder Text 3'
    }
  ];
}
