import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalPage } from './cal.page';

const routes: Routes = [
  {
    path: '',
    component: CalPage
  },
  {
    path: 'low',
    loadChildren: () => import('./low/low.module').then( m => m.LowPageModule)
  },
  {
    path: 'med',
    loadChildren: () => import('./med/med.module').then( m => m.MedPageModule)
  },
  {
    path: 'high',
    loadChildren: () => import('./high/high.module').then( m => m.HighPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalPageRoutingModule {}
