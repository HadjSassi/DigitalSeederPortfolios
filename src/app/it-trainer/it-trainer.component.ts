import {Component, OnInit} from '@angular/core';
import {Header2Component} from '../header2/header2.component';
import {FooterComponent} from '../footer/footer.component';
import {ArticleComponent} from '../article/article.component';
import trainerData from '../../../public/data/trainer.json';
import {CommonModule} from '@angular/common';
import data from "../../../public/data/about.json"
import config from '../../../public/config/itTrainer.json';


@Component({
  selector: 'app-it-trainer',
  imports: [
    Header2Component,
    FooterComponent,
    ArticleComponent,
    CommonModule
  ],
  templateUrl: './it-trainer.component.html',
  styleUrl: './it-trainer.component.css'
})
export class ItTrainerComponent implements OnInit{
  language: string;
  config : any;
  profileImage: string ;
  titlePage: string;
  titleArticle: string;
  trainings : any ;

  constructor() {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.config = config[this.language];
    // @ts-ignore
    this.profileImage = data[this.language]["itTrainerImage"];
    this.titlePage = this.config.titlePage;
    this.titleArticle = this.config.titleArticle;
    // @ts-ignore
    this.trainings = trainerData[this.language].trainings;

  }

  ngOnInit() {}

}
