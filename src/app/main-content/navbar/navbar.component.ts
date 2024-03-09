import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isResponsiveNavVisible = false;
  slideOut = false;

  toggleResponsiveNav() {
    this.isResponsiveNavVisible = !this.isResponsiveNavVisible;
  }

  closeResponsiveNav() {
    this.isResponsiveNavVisible = false;
    this.slideOut = true;
    setTimeout(() =>{
      this.slideOut = false;
    }, 500)
  }
}
