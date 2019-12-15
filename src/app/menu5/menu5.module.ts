import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu5PageRoutingModule } from './menu5-routing.module';

import { Menu5Page } from './menu5.page';

import { HttpClientModule } from '@angular/common/http';
import { Menu5Provider } from './menu5.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu5PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Menu5Page],
  providers: [Menu5Provider],
})

export class Menu5PageModule {}
