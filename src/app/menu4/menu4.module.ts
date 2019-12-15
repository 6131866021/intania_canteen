import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu4PageRoutingModule } from './menu4-routing.module';

import { Menu4Page } from './menu4.page';

import { HttpClientModule } from '@angular/common/http';
import { Menu4Provider } from './menu4.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu4PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Menu4Page],
  providers: [Menu4Provider],
})

export class Menu4PageModule {}
