import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService, Translation } from '../language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: [
    './privacy-policy.component.scss',
    './responsive-privacy-policy.component.scss',
  ],
})
export class PrivacyPolicyComponent {
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
