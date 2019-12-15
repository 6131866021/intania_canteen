import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllmenuPageRoutingModule } from './allmenu-routing.module';

import { AllmenuPage } from './allmenu.page';

import { HttpClientModule } from '@angular/common/http';
import { AllmenuProvider } from './allmenu.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllmenuPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AllmenuPage],
  providers: [AllmenuProvider]
})
export class AllmenuPageModule {}
