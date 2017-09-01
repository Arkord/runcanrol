import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { STORES } from './models/store.model';
import { STOREPRODUCTS } from './models/storeproducts.model';

@Injectable()
export class ProductsService {
	private http: Http;
	private config: Config;
	private resultStores: any;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getProducts(): Observable<Product[]> {
		return this.http.get(this.config.productsUrl)
			.map(x => x.json())
			.map(x => <Product[]>x.result);
	}

	getStores(): any {
		let url = 'http://www.operhum.com/ords/runcanrol/api/sitiosg/';
		return this.http.get(url)
			.map(response => this.resultStores = response.json().items);
	}

	getProductsStore(store_id): any {
		return STOREPRODUCTS.filter(item => item.store_id == store_id);
	}

}