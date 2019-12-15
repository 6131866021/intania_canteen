import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriedPageRoutingModule } from './fried-routing.module';
import { FriedPage } from './fried.page';

import { HttpClientModule } from '@angular/common/http';
import { FriedProvider } from './fried.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriedPageRoutingModule,
    HttpClientModule
  ],
  declarations: [FriedPage],
  providers: [FriedProvider]
})
export class FriedPageModule {}
