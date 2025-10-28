import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBackToTopButton = false;
  scrollThreshold = 50;
  constructor(private route: ActivatedRoute, private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showBackToTopButton = currentScrollPosition > this.scrollThreshold;
  }

  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
