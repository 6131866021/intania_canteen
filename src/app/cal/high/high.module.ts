import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighPageRoutingModule } from './high-routing.module';
import { HighPage } from './high.page';

import { HttpClientModule } from '@angular/common/http';
import { HighProvider } from './high.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighPageRoutingModule,
    HttpClientModule
  ],
  declarations: [HighPage],
  providers: [ HighProvider ]
})
export class HighPageModule {}
