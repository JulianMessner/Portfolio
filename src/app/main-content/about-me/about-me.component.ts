import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
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
