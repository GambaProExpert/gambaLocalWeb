//import { RenderMode, ServerRoute } from '@angular/ssr';
import { inject } from '@angular/core';
import { HomelabDataService } from './services/homelab-data.service';

/*
export const serverRoutes: ServerRoute[] = [
  {
    path: 'service/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const homelabData = inject(HomelabDataService);
      const services = homelabData.services;
      return services.map(service => ({ id: service.id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server, 
  },
];
*/