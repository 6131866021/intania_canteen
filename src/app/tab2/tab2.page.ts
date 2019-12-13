import { Component } from '@angular/core';
/** import { Observable } from 'rxjs';
import { MenuProvider } from '../models/menus.service';
import { Menu } from '../models/menus.model'; */

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

constructor() {}

/** content = document.querySelector('ion-content');
content.scrollEvents = true;
content.addEventListener('ionScrollStart', () => console.log('scroll start'));
content.addEventListener('ionScrollEnd', () => console.log('scroll end'));

  function scrollToTop() {
  getContent().scrollToTop(500);

  public menusCollection: Observable<Menu>;

  constructor(private menusProvider: MenuProvider) { 
    this.getMenu();
  }
  
  getMenu(){
    this.menusCollection = this.menusProvider.getMenu();
    console.log('Get Menu');
  } */


}
