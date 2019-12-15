import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CarbProvider } from './carb.service';
import { Menu } from '../../models/menus.model';

@Component({
  selector: 'app-carb',
  templateUrl: './carb.page.html',
  styleUrls: ['./carb.page.scss'],
})

export class CarbPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: CarbProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}