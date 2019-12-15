import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Menu } from '../../models/menus.model';

@Injectable()
export class HealthyProvider {
    private menuURL = "https://palmicanteen.herokuapp.com/choosefilterh"
    
    constructor(public http: HttpClient) {}

    getMenu() {
        return this.http.get<Menu>(this.menuURL);
    }
}