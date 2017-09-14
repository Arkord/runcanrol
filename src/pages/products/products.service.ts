import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
	private http: Http;
	private config: Config;
	private resultStores: any;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	getStores(): any {
		let url = 'http://www.operhum.com/ords/runcanrol/api/sitiosg/';
		return this.http.get(url)
			.map(response => this.resultStores = response.json().items);
	}

	getProductsStore(store_id): any {
		let url = 'http://www.operhum.com/ords/runcanrol/api/productos/' + store_id;
		return this.http.get(url)
			.map(response => this.resultStores = response.json().items);
	}
	getProductsStoreImg(mode: string, product_id): any {
		let url = 'http://www.operhum.com/ords/runcanrol/api/imgproductos/' + product_id;
		return this.http.get(url)
			.map(response => response.json().items);
	}

}