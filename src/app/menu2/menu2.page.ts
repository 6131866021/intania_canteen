import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu2Provider } from './menu2.service';
import { Menu } from '../models/menus.model';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})

export class Menu2Page {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: Menu2Provider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}