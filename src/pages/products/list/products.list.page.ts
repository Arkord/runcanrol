import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ProductsService } from '../products.service';
import { Product } from '../models/product.model';
import { ProductsItemPage } from '../item/products.item.page';

@Component({
	templateUrl: 'products.list.html',
	providers: [ProductsService]
})
export class ProductsListPage implements OnInit {
	private service: ProductsService;
	private nav: NavController;
	private store: any;

	public products: Product[];

	constructor(service: ProductsService, nav: NavController, navParams: NavParams) {
		this.service = service;
		this.nav = nav;
		this.store = navParams.get("store_id");
		alert(this.store);
	}

	ngOnInit(): void {
		this.service.getProducts()
			.subscribe(posts => {
				this.products = posts;
			});
	}

	public itemTapped(item) {
		this.nav.push(ProductsItemPage, {
			item: item
		});
	}
}
