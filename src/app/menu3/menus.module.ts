import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenusPageRoutingModule } from './menus-routing.module';

import { MenusPage } from './menus.page';
import { HttpClientModule } from '@angular/common/http';
import { MenuProvider } from './menus.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenusPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MenusPage],
  providers: [MenuProvider],
})

export class MenusPageModule {}
