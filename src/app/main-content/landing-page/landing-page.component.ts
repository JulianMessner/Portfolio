import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
import { LanguageService, Translation } from '../../language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './landing-page2.component.scss', './responsive-landing-page-component.scss', './responsive2-landing-page.component.scss']})
export class LandingPageComponent {
  constructor(private languageService: LanguageService) {}
  
  getTranslation(key: keyof Translation): string {
    return this.languageService.getTranslation(key);
  }

  switchToLanguage(lang: string) {
    this.languageService.setCurrentLanguage(lang);
  }
}
