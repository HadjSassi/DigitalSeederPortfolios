import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {TypedTextComponent} from '../typed-text/typed-text.component';
import aboutData from '../../../public/data/about.json';
import {CommonModule} from '@angular/common';
import config from '../../../public/config/header.json';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxTypedJsModule, TypedTextComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language: string;
  config:any ;
  @ViewChild('videoModal', {static: false}) videoModal!: ElementRef;
  about: any;
  sanitizedVideoIframe: any;

  constructor(private sanitizer: DomSanitizer) {
    this.language = localStorage.getItem('appLanguage') || 'en'; // Default to English
    // @ts-ignore
    this.config = config[this.language];
    // @ts-ignore
    this.about = aboutData[this.language];
  }

  ngOnInit() {
    this.sanitizedVideoIframe = this.sanitizer.bypassSecurityTrustHtml(this.about.videoIframe);
  }

  openModal() {
    const modalElement = this.videoModal.nativeElement;
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  toggleLanguage() {
    this.language = this.language === 'en' ? 'fr' : 'en';
    localStorage.setItem('appLanguage', this.language);
    window.location.reload();
  }
}
