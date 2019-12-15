import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu4Provider } from './menu4.service';
import { Menu } from '../models/menus.model';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.page.html',
  styleUrls: ['./menu4.page.scss'],
})

export class Menu4Page {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: Menu4Provider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}
