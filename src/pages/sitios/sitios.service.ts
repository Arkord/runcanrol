import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SITIOS } from './tipos-sitios';

@Injectable()
export class SitiosService {
	private http: Http;
	private result: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
	}

	all() {
		let url = 'https://kingsware.maxapex.net/apex/runcanrol/api/sitiosg/';
		return this.http.get(url)
			.map(response => this.result = response.json().items)
	}

	byType(type) {
		let url = 'https://kingsware.maxapex.net/apex/runcanrol/api/sitiosp/' + type;
		return this.http.get(url)
			.map(response => this.result = response.json().items)
	}

	getTipos() {
		return SITIOS;
	}

	get(area_id) {
		for (let i = 0; i < this.result.length; i++) {
			if (this.result[i].area_id === area_id) {
				return Observable.of(this.result[i]);
			}
		}
		return Observable.of(null);
	}

	filter(tipo) {
		let res;
		if(tipo !== "todas") {
			res = this.result.filter(item => item.tipo === tipo)
		}
		else {
			res = this.result;
		}
		
		return Observable.of(res);
	}

}