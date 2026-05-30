import { Component, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled = false;

  isDark = false;
 
  constructor(private renderer: Renderer2) {}
 
  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDark = false;
      this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
    }
  }
  
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeAttribute(document.documentElement, 'data-theme');
      localStorage.setItem('theme', 'light');
    }
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
