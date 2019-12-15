import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthyPageRoutingModule } from './healthy-routing.module';
import { HealthyPage } from './healthy.page';

import { HttpClientModule } from '@angular/common/http';
import { HealthyProvider } from './healthy.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthyPageRoutingModule,
    HttpClientModule
  ],
  declarations: [HealthyPage],
  providers: [HealthyProvider]
})
export class HealthyPageModule {}
