import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu1Provider } from './menu1.service';
import { Menu } from '../models/menus.model';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})

export class Menu1Page {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: Menu1Provider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}
