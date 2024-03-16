import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService, Translation } from '../../language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './responsive-navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private languageService: LanguageService) {}

  getTranslation(key: keyof Translation): string {
    return this.languageService.getTranslation(key);
  }

  switchToLanguage(lang: string) {
    this.languageService.setCurrentLanguage(lang);
  }

  isResponsiveNavVisible = false;
  slideOut = false;

  toggleResponsiveNav() {
    this.isResponsiveNavVisible = !this.isResponsiveNavVisible;
  }

  closeResponsiveNav() {
    this.isResponsiveNavVisible = false;
    this.slideOut = true;
    setTimeout(() => {
      this.slideOut = false;
    }, 500);
  }
}
