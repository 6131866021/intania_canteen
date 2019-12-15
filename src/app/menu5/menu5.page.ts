import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu5Provider } from './menu5.service';
import { Menu } from '../models/menus.model';

@Component({
  selector: 'app-menu5',
  templateUrl: './menu5.page.html',
  styleUrls: ['./menu5.page.scss'],
})

export class Menu5Page {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: Menu5Provider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}