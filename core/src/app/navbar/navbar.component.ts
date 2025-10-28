import {Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router'; // Import CommonModule
import config from '../../../public/config/navbar.json';
import about from '../../../public/data/about.json'
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  language: string ;
  // @ts-ignore
  config: any;
  currentFragment: string | null = null;
  isNavbarVisible = false;
  mailing = 'mailto:' + about.en.email;
  subTitle1 = about.en.subname1;
  subTitle2 = about.en.subname2;

  constructor(private router: Router) {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.config = config[this.language];
  }

  ngOnInit(): void {
    // Set the initial fragment from the URL (if any)
    this.currentFragment = window.location.hash ? window.location.hash.substring(1) : null;

    // (Optional) If you prefer to capture router events too:
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentFragment = this.router.parseUrl(this.router.url).fragment;
      }
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarVisible = window.scrollY > 200;
  }

  // Listen for the native hashchange event
  @HostListener('window:hashchange', ['$event'])
  onHashChange(event: HashChangeEvent) {
    this.currentFragment = window.location.hash ? window.location.hash.substring(1) : null;
  }

  // Helper method to determine if a fragment is active
  isActive(fragment: string): boolean {
    return this.currentFragment === fragment;
  }
}
