import { Component, HostListener } from '@angular/core'; // Import HostListener
import { CommonModule } from '@angular/common'; // Required for ngClass, ngIf, etc.
import { RouterOutlet, RouterModule } from '@angular/router'; // Required for routerLink

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule], // Add CommonModule and RouterModule
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // Corrected to styleUrls (plural)
})
export class App { // Using 'App' as per your provided default
  protected title = 'ZUXROK';

  // Property to track scroll state for header transparency
  isScrolled = false;

  // HostListener to update isScrolled when window scrolls
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
