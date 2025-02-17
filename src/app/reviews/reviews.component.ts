import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import config from '../../../public/config/reviews.json';

interface Review {
  text: string;
  imageAbout: string;
  name: string;
  position: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements AfterViewInit {
  language: string;
  // @ts-ignore
  config: any;
  reviews: Review[] = [];

  constructor(private http: HttpClient) {
    this.language = localStorage.getItem('appLanguage') || 'en';
    // @ts-ignore
    this.config = config[this.language];
  }

  ngAfterViewInit() {
    this.fetchReviews().subscribe(data => {
      // @ts-ignore
      this.reviews = data[this.language].reviews;
    });
  }

  fetchReviews(): Observable<{ reviews: Review[] }> {
    return this.http.get<{ reviews: Review[] }>('data/reviews.json');
  }
}
