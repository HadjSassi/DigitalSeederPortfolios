import {Component, OnInit} from '@angular/core';
import experienceData from '../../../public/data/experience.json';
import {CommonModule} from '@angular/common';
import config from '../../../public/config/experience.json';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [CommonModule],
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  language: string;
  config: any;
  education: any;
  experience: any;

  constructor() {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.config = config[this.language];
    // @ts-ignore
    this.education = experienceData[this.language].education;
    // @ts-ignore
    this.experience = experienceData[this.language].experience;
  }

  ngOnInit() {
  }
}
