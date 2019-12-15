import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodtypePage } from './foodtype.page';

const routes: Routes = [
  {
    path: '',
    component: FoodtypePage
  },
  {
    path: 'fried',
    loadChildren: () => import('./fried/fried.module').then( m => m.FriedPageModule)
  },
  {
    path: 'veg',
    loadChildren: () => import('./veg/veg.module').then( m => m.VegPageModule)
  },
  {
    path: 'carb',
    loadChildren: () => import('./carb/carb.module').then( m => m.CarbPageModule)
  },
  {
    path: 'healthy',
    loadChildren: () => import('./healthy/healthy.module').then( m => m.HealthyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodtypePageRoutingModule {}
