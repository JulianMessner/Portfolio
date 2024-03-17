import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
import { LanguageService, Translation } from '../../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: [
    './about-me.component.scss',
    './responsive-about-me.component.scss',
  ],
})
export class AboutMeComponent {
  constructor(private el: ElementRef, private languageService: LanguageService
  ) {}

  isScrolledIntoView = false;


  /**
   * Retrieves translation for the given key from LanguageService.
   * @param {keyof Translation} key - The key for translation.
   * @returns {string} - The translated string.
   */
  getTranslation(key: keyof Translation): string {
    return this.languageService.getTranslation(key);
  }
  

  /**
   * Listener for scroll events on the window to determine if the component is in view.
   */
  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isPartiallyInView = rect.top <= windowHeight && rect.bottom >= 500;

    if (!this.isScrolledIntoView && isPartiallyInView) {
      this.isScrolledIntoView = true;
    }
  }
}
