import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtypePageRoutingModule } from './foodtype-routing.module';

import { FoodtypePage } from './foodtype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtypePageRoutingModule
  ],
  declarations: [FoodtypePage]
})
export class FoodtypePageModule {}
