import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarbPage } from './carb.page';

const routes: Routes = [
  {
    path: '',
    component: CarbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarbPageRoutingModule {}
