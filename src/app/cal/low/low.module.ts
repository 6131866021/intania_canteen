import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LowPageRoutingModule } from './low-routing.module';
import { LowPage } from './low.page';

import { HttpClientModule } from '@angular/common/http';
import { LowProvider } from './low.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowPageRoutingModule,
    HttpClientModule
  ],
  declarations: [LowPage],
  providers: [LowProvider]
})
export class LowPageModule {}
