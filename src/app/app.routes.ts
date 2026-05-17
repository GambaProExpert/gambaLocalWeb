import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'service/:id',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
  },
  { path: '**', redirectTo: ''}
  
];