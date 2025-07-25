import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required if you use any Angular directives in news.html

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule], // Add CommonModule
  templateUrl: './news.html',
  styleUrls: ['./news.scss'] // Corrected to styleUrls (plural)
})
export class News { // Using 'News' as per your provided default
  // Any logic for your news page would go here
}
