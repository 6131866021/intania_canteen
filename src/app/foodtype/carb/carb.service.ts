import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Menu } from '../../models/menus.model';

@Injectable()
export class CarbProvider {
    private menuURL = "https://palmicanteen.herokuapp.com/choosefilterc"
    
    constructor(public http: HttpClient) {}

    getMenu() {
        return this.http.get<Menu>(this.menuURL);
    }
}