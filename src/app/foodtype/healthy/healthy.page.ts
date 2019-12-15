import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthyProvider } from './healthy.service';
import { Menu } from '../../models/menus.model';

@Component({
  selector: 'app-healthy',
  templateUrl: './healthy.page.html',
  styleUrls: ['./healthy.page.scss'],
})

export class HealthyPage {

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: HealthyProvider) 
    { this.getMenu(); }
  
  getMenu() {
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  }

}
