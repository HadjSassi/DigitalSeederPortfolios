import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {AboutComponent} from '../about/about.component';
import {FooterComponent} from '../footer/footer.component';
import {SkillsComponent} from '../skills/skills.component';
import {ExperienceComponent} from '../experience/experience.component';
import {ServicesComponent} from '../services/services.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {AchievementsComponent} from '../achievements/achievements.component';
import {SocialLifeComponent} from '../social-life/social-life.component';
import {ReviewsComponent} from '../reviews/reviews.component';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    ServicesComponent,
    PortfolioComponent,
    AchievementsComponent,
    SocialLifeComponent,
    ReviewsComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit{
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Scroll to the section if there's an initial fragment.
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  ngAfterViewInit() {
    // Select all sections with an id
    const sections = document.querySelectorAll('[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter to only intersecting entries
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        if (visibleSections.length > 0) {
          // Sort by distance from the top of the viewport
          visibleSections.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          const topSection = visibleSections[0];
          const id = topSection.target.getAttribute('id');
          if (id && window.location.hash.substring(1) !== id) {
            window.location.hash = id;
          }
        }
      },
      {
        threshold: 0.1, // Lower threshold means we detect the section earlier
        rootMargin: '-40% 0px -60% 0px' // Adjust so only the section near the top triggers
      }
    );

    sections.forEach(section => observer.observe(section));
  }
}
