import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class NewsComponent {

  newsItems = [
    {
      title: 'Website Visual Update',
      date: '7/10/2025',
      content: 'The visual appearance of the website has been modified with new designs and improved responsiveness.'
    }
  ];
}
