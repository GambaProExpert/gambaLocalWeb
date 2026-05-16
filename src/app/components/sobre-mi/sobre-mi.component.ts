import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent {
  @ViewChild('placeholder') placeholder!: ElementRef<HTMLElement>;

  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    // El placeholder ya está en el DOM, solo lo mostramos
    const ph = img.closest('.photo-inner')?.querySelector('.photo-placeholder') as HTMLElement;
    if (ph) ph.style.display = 'flex';
  }
}
