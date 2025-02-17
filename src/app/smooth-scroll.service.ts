import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  scrollTo(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
