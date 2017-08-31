import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PromocionesService {
	private http: Http;
	private result: any;
	private resultSitios: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
		this.resultSitios = [];
	}

	all() {
		let url = 'http://www.operhum.com/ords/runcanrol/api/promociones';
		return this.http.get(url)
			.map(response => this.result = response.json().items)
	}

	sitios() {
		let url = 'http://www.operhum.com/ords/runcanrol/api/sitiosg/';
		return this.http.get(url)
			.map(response => this.resultSitios = response.json().items)
	}

	filter(sitio) {
		let res;
		if(sitio !== "todos") {
			res = this.result.filter(item => item.tipo === sitio)
		}
		else {
			res = this.result;
		}
		
		return Observable.of(res);
	}

}