import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedPageRoutingModule } from './med-routing.module';
import { MedPage } from './med.page';

import { HttpClientModule } from '@angular/common/http';
import { MedProvider } from './med.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MedPage],
  providers: [ MedProvider ]
})
export class MedPageModule {}
