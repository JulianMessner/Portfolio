import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-left.component.html',
  styleUrl: './project-left.component.scss',
})
export class ProjectLeftComponent {
  imageSrcArray = [
    '../../../../assets/img/projects/join-project2.png',
    '../../../../assets/img/projects/el-pollo-loco.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pokedex.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
    '../../../../assets/img/projects/pc-mockup.png',
  ];
  h3TitleArray = ['Join', 'El Pollo Loco', 'Simple CRM', 'Pokédex'];
  h4TitleArray = [
    'JavaScript | HTML | CSS',
    'JavaScript | HTML | CSS',
    'Angular | TypeScript',
    'JavaScript | HTML | CSS | API',
  ];
  pTextArray = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find bottles to fight against the mega chicken.',
    'A simple Customer Relationship Management system working with CRUD functionality.',
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
  ];
  liveTestLinkArray = [
    'https://example.com/live-test-1',
    'https://example.com/live-test-2',
    'https://example.com/live-test-3',
    'https://example.com/live-test-4',
  ];
  githubLinkArray = [
    'https://github.com/project1',
    'https://github.com/JulianMessner/El-Pollo-Loco',
    'https://github.com/project3',
    'https://github.com/JulianMessner/Pok-dex',
  ];
}
