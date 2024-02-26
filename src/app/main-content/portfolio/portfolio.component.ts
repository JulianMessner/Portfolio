import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectLeftComponent } from './project-left/project-left.component';
import { ProjectRightComponent } from './project-right/project-right.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectLeftComponent, ProjectRightComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
