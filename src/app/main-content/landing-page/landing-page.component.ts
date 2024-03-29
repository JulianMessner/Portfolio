import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
import { LanguageService, Translation } from '../../language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    './landing-page2.component.scss',
    './responsive-landing-page-component.scss',
    './responsive2-landing-page.component.scss',
    './responsive3-landing-page.component.scss',
  ],
})
export class LandingPageComponent {
  constructor(private languageService: LanguageService) {}

  /**
   * Retrieves translation for the given key from LanguageService.
   * @param {keyof Translation} key - The key for translation.
   * @returns {string} - The translated string.
   */

  getTranslation(key: keyof Translation): string {
    return this.languageService.getTranslation(key);
  }

  /**
   * Sets the current language using LanguageService.
   * @param {string} lang - The language code to switch to.
   */
  switchToLanguage(lang: string) {
    this.languageService.setCurrentLanguage(lang);
  }
}
