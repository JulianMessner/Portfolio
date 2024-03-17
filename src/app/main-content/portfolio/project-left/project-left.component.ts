import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
import { LanguageService, Translation } from '../../../language.service';

@Component({
  selector: 'app-project-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-left.component.html',
  styleUrls: [
    './project-left.component.scss',
    './project-left2.component.scss',
    './responsive-project-left.component.scss',
  ],
})
export class ProjectLeftComponent {
  imageSrcArray = [
    '../../../../assets/img/projects/join-project2.png',
    '../../../../assets/img/projects/el-pollo-loco.png',
    '../../../../assets/img/projects/pokedex.png',
  ];
  h3TitleArray = ['Join', 'El Pollo Loco', 'Pokédex'];
  h4TitleArray = [
    'JavaScript | HTML | CSS',
    'JavaScript | HTML | CSS',
    'JavaScript | HTML | CSS | API',
  ];
  pTextArray = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find bottles to fight against the mega chicken.',
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
  ];
  liveTestLinkArray = [
    'https://julian-johannes-messner.developerakademie.net/Join-Project/html/index.html',
    'https://julian-johannes-messner.developerakademie.net/el_pollo_loco/index.html',
    'https://julian-johannes-messner.developerakademie.net/pokedex/index.html',
  ];
  githubLinkArray = [
    'https://github.com/JulianMessner/JOIN',
    'https://github.com/JulianMessner/El-Pollo-Loco',
    'https://github.com/JulianMessner/Pok-dex',
  ];

  isScrolledIntoView = false;

  constructor(
    private el: ElementRef,
    private languageService: LanguageService
  ) {}


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
