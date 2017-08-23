import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductsService } from '../products.service';

@Component({
    templateUrl: 'products.stores.html',
    providers: [ ProductsService ]
})

export class ProductsStoresPage {
    private stores;

    constructor(ProductsService: ProductsService, nav: NavController) {
        this.stores = ProductsService.getStores();
    }
    

}