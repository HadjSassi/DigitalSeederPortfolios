import { Component, Input, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-article',
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @Input() article: any;
  @Input() titleArticle: any;

  currentIndex: number = 0;
  selectedImagePath: string = '';
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
    this.initializeModalCleanup();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.article.images.length) % this.article.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.article.images.length;
  }

  openModal(imagePath: string) {
    this.selectedImagePath = imagePath;

    const modalElement = this.el.nativeElement.querySelector('#mediaModal');
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();

    modalElement.addEventListener('hidden.bs.modal', () => {
      this.selectedImagePath = ''; // Reset when modal is closed
    });
  }

  // Cleanup modal image reset
  private initializeModalCleanup() {
    const modalElement = this.el.nativeElement.querySelector('#mediaModal');
    modalElement.addEventListener('hidden.bs.modal', () => {
      this.selectedImagePath = '';
    });
  }
}

