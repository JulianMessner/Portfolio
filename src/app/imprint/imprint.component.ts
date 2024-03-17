import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService, Translation } from '../language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss', './responsive-imprint.component.scss']
})
export class ImprintComponent {
  constructor(private languageService: LanguageService) {}

  getTranslation(key: keyof Translation): string {
    return this.languageService.getTranslation(key);
  }
}
