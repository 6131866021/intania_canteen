import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegPageRoutingModule } from './veg-routing.module';
import { VegPage } from './veg.page';

import { HttpClientModule } from '@angular/common/http';
import { VegProvider } from './veg.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegPageRoutingModule,
    HttpClientModule
  ],
  declarations: [VegPage],
  providers: [VegProvider]
})
export class VegPageModule {}
