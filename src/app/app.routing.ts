import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
