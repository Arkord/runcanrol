import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ProductsService } from '../products.service';
import { Product } from '../models/product.model';
import { ProductsItemPage } from '../item/products.item.page';
import { PayPalPage } from '../../paypal/paypal.page';

@Component({
	templateUrl: 'products.list.html',
	providers: [ProductsService]
})
export class ProductsListPage implements OnInit {
	private service: ProductsService;
	private nav: NavController;
	private name: any;
	private store: any;

	public products: Product[];

	constructor(service: ProductsService, nav: NavController, navParams: NavParams) {
		this.service = service;
		this.nav = nav;
		this.name = navParams.get("name");
		this.store = navParams.get("store_id");
	}

	ngOnInit(): void {
		/*this.service.getProductsStore(this.store)
			.subscribe(products => {
				this.products = products;
			});*/
		this.products = this.service.getProductsStore(this.store);
	}

	goPayPal() {
		this.nav.push(PayPalPage);
	}

}
