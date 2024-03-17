import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService, Translation } from '../language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrls: [
    './imprint.component.scss',
    './responsive-imprint.component.scss',
  ],
})
export class ImprintComponent {
  constructor(private languageService: LanguageService) {}

  /**
   * Retrieves translation for the given key from LanguageService.
   * @param {keyof Translation} key - The key for translation.
   * @returns {string} - The translated string.
   */
  getTranslation(key: keyof Translation): string {
    return this.languageService.getTranslation(key);
  }
}
