import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsListPage } from '../list/products.list.page';

import { ProductsService } from '../products.service';

@Component({
    templateUrl: 'products.stores.html',
    providers: [ ProductsService ]
})

export class ProductsStoresPage {
    private nav: NavController;
    private stores;

    constructor(ProductsService: ProductsService, nav: NavController) {
        this.nav = nav;
        this.stores = ProductsService.getStores();
    }
    
    goProducts(id) {
        this.nav.push(ProductsListPage, {
            store_id: id
        });
    }

}