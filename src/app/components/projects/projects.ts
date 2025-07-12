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
      name: 'Placeholder 1',
      description: 'Placeholder Text 1',
      downloadLink: 'https://drive.google.com/file/d/1Q5XhR-dwLCAG71rklsSVVgWU_9j1-sCg/view?usp=sharing'
    },
    {
      name: 'Placeholder 2',
      description: 'Placeholder Text 2',
      downloadLink: 'https://drive.google.com/file/d/1Q5XhR-dwLCAG71rklsSVVgWU_9j1-sCg/view?usp=sharing'
    },
    {
      name: 'Placeholder 3',
      description: 'Placeholder Text 3',
      downloadLink: 'https://drive.google.com/file/d/1Q5XhR-dwLCAG71rklsSVVgWU_9j1-sCg/view?usp=sharing'
    }
  ];

  downloadGame(link: string): void {
    window.open(link, '_blank');
  }
}
