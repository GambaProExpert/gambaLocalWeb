import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { HomelabDataService, LabNode, Service } from '../../services/homelab-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, HeroComponent],
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
}