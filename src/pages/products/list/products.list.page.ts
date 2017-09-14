import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ProductsService } from '../products.service';
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
	private imgUrl: string;
	private images;

	public products;

	constructor(service: ProductsService, nav: NavController, navParams: NavParams) {
		this.images = [];
		this.products = [];
		this.service = service;
		this.nav = nav;
		this.name = navParams.get("name");
		this.store = navParams.get("store_id");
		this.imgUrl = "http://www.operhum.com/ords/runcanrol/api/imgproductos/";
	}

	ngOnInit(): void {
		this.service.getProductsStore(this.store)
			.subscribe(products => {
				this.products = products;
				this.populateImages(this.products);
		});
	}

	populateImages(products) {
		for(let product of products) {
			this.service.getProductsStoreImg("multi", product.producto_id)
			.subscribe(images => {
				let item = {
					id: product.producto_id,
					data: images
				}
				this.images.push(item);
				console.log(this.images);
			});
		}
	}

	getImage(product_id) {
		if(this.images.length >0) {
			console.log("product_id", product_id);
			console.log("all", this.images);
			console.log("filter", this.images.filter(item => item.id = product_id));
			let result = this.images.filter(item => item.id = product_id)[0].data[0].ruta;
			return "http://" + result;
		}
		else {
			return "";
		}
	}

	goPayPal(price, name) {
		this.nav.push(PayPalPage, {
			price: price,
			name: name
		});
	}

}
