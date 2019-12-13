import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuProvider } from './menus.service';
import { Menu } from '../models/menus.model';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})

export class MenusPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: MenuProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}
