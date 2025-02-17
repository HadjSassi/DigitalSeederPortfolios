import { Component, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import config from '../../../public/config/skills.json';

interface Skill {
  name: string;
  percentage: number;
  logo: string;
  color: string;
  style: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule]
})
export class SkillsComponent implements AfterViewInit {
  language: string;
  // @ts-ignore
  config: any
  skills: Skill[] = [];
  private hasAnimated: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2, private http: HttpClient) {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.config = config[this.language];
  }

  ngAfterViewInit() {
    this.loadSkills();
    this.checkScroll();
  }

  private loadSkills() {
    this.http.get<Skill[]>('data/skills.json')
      .subscribe(data => {
        this.skills = data;
      });
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    const componentPosition = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (componentPosition < windowHeight * 0.8 && !this.hasAnimated) {
      this.animateProgressBars();
      this.hasAnimated = true; // Prevent re-animation
    }
  }

  private animateProgressBars() {
    const progressBars = this.el.nativeElement.querySelectorAll('.progress-bar');

    progressBars.forEach((bar: HTMLElement, index: number) => {
      const targetValue = parseInt(bar.getAttribute('aria-valuenow') || '0', 10);
      let currentPercentage = 0;
      const percentageText = bar.closest('.skill')?.querySelector('.skill-percentage');
      const increment = Math.ceil(targetValue / 100);
      const delay = 15;

      // Set the bar color from the skills array
      const skillColor = this.skills[index]?.color; // Get the color from the skills array
      if (skillColor) {
        this.renderer.setStyle(bar, 'background-color', skillColor); // Set the bar color
      }

      const animate = () => {
        if (currentPercentage < targetValue) {
          currentPercentage += increment;
          if (currentPercentage > targetValue) {
            currentPercentage = targetValue;
          }
          if (percentageText) {
            this.renderer.setProperty(percentageText, 'innerText', currentPercentage + '%');
          }
          this.renderer.setStyle(bar, 'width', currentPercentage + '%');
          setTimeout(animate, delay);
        }
      };

      animate();
    });
  }
}
