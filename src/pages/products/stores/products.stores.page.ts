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
    private ProductsService: ProductsService;
    private stores;

    constructor(ProductsService: ProductsService, nav: NavController) {
        this.nav = nav;
        this.ProductsService = ProductsService;
        this.ProductsService.getStores().subscribe(
            response => this.stores = response
        );
        //console.log(this.stores);
    }
    
    goProducts(id, name) {
        this.nav.push(ProductsListPage, {
            store_id: id,
            name: name
        });
    }

}