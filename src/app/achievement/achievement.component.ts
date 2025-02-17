import {Component, OnInit} from '@angular/core';
import {Header2Component} from '../header2/header2.component';
import {FooterComponent} from '../footer/footer.component';
import achievementData from '../../../public/data/achievements.json';
import aboutData from '../../../public/data/about.json';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from '../article/article.component';
import {ActivatedRoute} from '@angular/router';
import config from '../../../public/config/achievement.json';



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
  selector: 'app-achievement',
  imports: [
    Header2Component,
    FooterComponent,
    CommonModule,
    ArticleComponent
  ],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})

export class AchievementComponent implements OnInit {
  language: string;
  config : any;
  profileImage: string = "";
  titlePage: string ;
  titlePage2: string = "";
  titleArticle: string ;
  name: string | undefined;
  achievement: AchievementItem | undefined;

  constructor(private route: ActivatedRoute) {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.config = config[this.language];
    // @ts-ignore
    this.profileImage = aboutData[this.language]["achievementImage"];
    this.titlePage = this.config.titlePage;
    this.titlePage2 = "";
    this.titleArticle = this.config.titleArticle;
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    const achievements: AchievementData = achievementData;
    // @ts-ignore
    const allAchievements = achievements[this.language].achievements.flatMap(category => category.items);
    this.achievement = allAchievements.find((item: { id: string | undefined; }) => item.id === this.name);
    // @ts-ignore
    this.titlePage2 = this.achievement.title;
  }
}
