import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import config from '../../../public/config/achievements.json';
import achievementData from '../../../public/data/achievements.json';

interface AchievementItem {
  title: string;
  date: string;
  location: string;
  description: string;
  description2: string;
  link: string;
  id: string;
  images: string[];
  videos: string[];
}


interface AchievementCategory {
  category: string;
  items: AchievementItem[];
}

interface AchievementData {
  en: {
    achievements: AchievementCategory[];
  };
  fr: {
    achievements: AchievementCategory[];
  };
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  imports: [CommonModule]
})
export class AchievementsComponent implements OnInit {
  language: string;
  // @ts-ignore
  config:any ;
  achievements: AchievementCategory[] = [];

  constructor(private http: HttpClient) {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.config = config[this.language];
  }

  ngOnInit(): void {
    this.loadAchievements();
  }

  private loadAchievements(): void {
    const achievements: AchievementData = achievementData;
    // @ts-ignore
    this.achievements = achievements[this.language].achievements;
  }

}
