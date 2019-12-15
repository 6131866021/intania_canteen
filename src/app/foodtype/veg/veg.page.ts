import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VegProvider } from './veg.service';
import { Menu } from '../../models/menus.model';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.page.html',
  styleUrls: ['./veg.page.scss'],
})

export class VegPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: VegProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}