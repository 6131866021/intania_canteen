import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FriedProvider } from './fried.service';
import { Menu } from '../../models/menus.model';

@Component({
  selector: 'app-fried',
  templateUrl: './fried.page.html',
  styleUrls: ['./fried.page.scss'],
})

export class FriedPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: FriedProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}