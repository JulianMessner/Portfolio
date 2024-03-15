import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-project-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-left.component.html',
  styleUrls: ['./project-left.component.scss', './responsive-project-left.component.scss']
})
export class ProjectLeftComponent {
  imageSrcArray = [
    '../../../../assets/img/projects/join-project2.png',
    '../../../../assets/img/projects/el-pollo-loco.png',
    // '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pokedex.png',
  ];
  h3TitleArray = ['Join', 'El Pollo Loco', 'Pokédex'];
  h4TitleArray = [
    'JavaScript | HTML | CSS',
    'JavaScript | HTML | CSS',
    // 'Angular | TypeScript',
    'JavaScript | HTML | CSS | API',
  ];
  pTextArray = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find bottles to fight against the mega chicken.',
    // 'A simple Customer Relationship Management system working with CRUD functionality.',
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
  ];
  liveTestLinkArray = [
    'https://julian-johannes-messner.developerakademie.net/Join-Project/html/index.html',
    'https://julian-johannes-messner.developerakademie.net/el_pollo_loco/index.html',
    // 'https://example.com/live-test-3',
    'https://julian-johannes-messner.developerakademie.net/pokedex/index.html',
  ];
  githubLinkArray = [
    'https://github.com/JulianMessner/JOIN',
    'https://github.com/JulianMessner/El-Pollo-Loco',
    // 'https://github.com/project3',
    'https://github.com/JulianMessner/Pok-dex',
  ];

  isScrolledIntoView = false;

  constructor(private el: ElementRef) {}

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
