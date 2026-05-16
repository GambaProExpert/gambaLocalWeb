import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SobreMiComponent } from '../../components/sobre-mi/sobre-mi.component';
import { HomelabDataService, LabNode, Service } from '../../services/homelab-data.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, HeroComponent, SobreMiComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nodes: LabNode[];
  services: Service[];

  constructor(private data: HomelabDataService) {
    this.nodes = this.data.nodes;
    this.services = this.data.services;
  }
  onImgError(event: Event, name: string): void {
  const img = event.target as HTMLImageElement;
  img.style.display = 'none';
  const fallback = img.nextElementSibling as HTMLElement;
  if (fallback) fallback.style.display = 'flex';
}
}
