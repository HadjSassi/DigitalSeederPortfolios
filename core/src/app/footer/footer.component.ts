import { Component } from '@angular/core';
import aboutData from '../../../public/data/about.json';
import {CommonModule} from '@angular/common';
import {environment} from '../environment/environment';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  language: string;
  about:any ;
  constructor() {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.about = aboutData[this.language];
  }
}
