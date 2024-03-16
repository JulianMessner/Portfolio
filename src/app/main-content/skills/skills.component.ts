import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
import { LanguageService, Translation } from '../../language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './responsive-skills.component.scss']
})
export class SkillsComponent {
  isScrolledIntoView = false;

  constructor(private el: ElementRef, private languageService: LanguageService) {}

  getTranslation(key: keyof Translation): string {
    return this.languageService.getTranslation(key);
  }

  switchToLanguage(lang: string) {
    this.languageService.setCurrentLanguage(lang);
  }

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
