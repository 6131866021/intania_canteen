import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MedProvider } from './med.service';
import { Menu } from '../../models/menus.model';

@Component({
  selector: 'app-med',
  templateUrl: './med.page.html',
  styleUrls: ['./med.page.scss'],
})

export class MedPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: MedProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}
