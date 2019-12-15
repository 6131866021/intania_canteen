import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HighProvider } from './high.service';
import { Menu } from '../../models/menus.model';

@Component({
  selector: 'app-high',
  templateUrl: './high.page.html',
  styleUrls: ['./high.page.scss'],
})

export class HighPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: HighProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}
