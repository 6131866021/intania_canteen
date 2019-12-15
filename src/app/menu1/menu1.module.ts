import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu1PageRoutingModule } from './menu1-routing.module';
import { Menu1Page } from './menu1.page';

import { HttpClientModule } from '@angular/common/http';
import { Menu1Provider } from './menu1.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu1PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Menu1Page],
  providers: [Menu1Provider]
})
export class Menu1PageModule {}
