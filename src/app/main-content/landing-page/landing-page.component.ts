import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './landing-page2.component.scss', './responsive-landing-page-component.scss', './responsive2-landing-page.component.scss']})
export class LandingPageComponent {
}
