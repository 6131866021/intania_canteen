import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LowProvider } from './low.service';
import { Menu } from '../../models/menus.model';

@Component({
  selector: 'app-low',
  templateUrl: './low.page.html',
  styleUrls: ['./low.page.scss'],
})

export class LowPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: LowProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}
