import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typed-text',
  template: `<span>{{ displayedText }}</span>`,
  styleUrls: ['./typed-text.component.css']
})
export class TypedTextComponent implements OnInit {
  @Input() strings: string[] = [];
  @Input() typeSpeed: number = 100;
  @Input() backSpeed: number = 50;
  @Input() loop: boolean = true;

  displayedText: string = '';
  currentStringIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;

  ngOnInit() {
    this.type();
  }

  type() {
    const currentString = this.strings[this.currentStringIndex];
    if (this.isDeleting) {
      this.displayedText = currentString.substring(0, this.currentCharIndex--);
      if (this.currentCharIndex < 0) {
        this.isDeleting = false;
        this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;
        setTimeout(() => this.type(), this.typeSpeed);
      } else {
        setTimeout(() => this.type(), this.backSpeed);
      }
    } else {
      this.displayedText = currentString.substring(0, this.currentCharIndex++);
      if (this.currentCharIndex === currentString.length) {
        setTimeout(() => {
          this.isDeleting = true;
          this.type();
        }, 1000);
      } else {
        setTimeout(() => this.type(), this.typeSpeed);
      }
    }
  }
}
