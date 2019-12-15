import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarbPageRoutingModule } from './carb-routing.module';
import { CarbPage } from './carb.page';

import { HttpClientModule } from '@angular/common/http';
import { CarbProvider } from './carb.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarbPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CarbPage],
  providers: [CarbProvider]
})
export class CarbPageModule {}
