import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import aboutData from '../../../public/data/about.json';
import config from '../../../public/config/header.json';
import {environment} from '../environment/environment';

@Component({
  selector: 'app-header2',
    imports: [
        CommonModule
    ],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component  {
  language: string;
  config : any;
  @Input() profileImage: string = '';
  @Input() titlePage: string = '';
  @Input() titlePage2: string = '';
  about : any;

  constructor() {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.config = config[this.language];
    // @ts-ignore
    this.about = aboutData[this.language];
  }

  toggleLanguage() {
    this.language = this.language === 'en' ? 'fr' : 'en';
    localStorage.setItem('appLanguage', this.language);
    window.location.reload();
  }

}
