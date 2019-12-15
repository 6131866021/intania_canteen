import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AllmenuProvider } from './allmenu.service';
import { Menu } from '../models/menus.model';

@Component({
  selector: 'app-allmenu',
  templateUrl: './allmenu.page.html',
  styleUrls: ['./allmenu.page.scss'],
})

export class AllmenuPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: AllmenuProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}

