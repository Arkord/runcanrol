import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SITIOS } from './tipos-sitios';

@Injectable()
export class SitiosService {
	private http: Http;
	private result: any;
	private resultZonas: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
		this.resultZonas = [];
	}

	all() {
		let url = 'https://kingsware.maxapex.net/apex/runcanrol/api/sitiosg/';
		return this.http.get(url)
			.map(response => this.result = response.json().items);
	}

	byType(type) {
		let url = 'https://kingsware.maxapex.net/apex/runcanrol/api/sitiosp/' + type;
		return this.http.get(url)
			.map(response => this.result = response.json().items);
	}

	getZonas() {
		let url = 'https://kingsware.maxapex.net/apex/runcanrol/api/zonas/';
		return this.http.get(url)
			.map(response => this.resultZonas = response.json().items);
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

	filter(zona) {
		let res;
		if(zona !== "todas") {
			res = this.result.filter(item => item.zona === zona)
		}
		else {
			res = this.result;
		}
		
		return Observable.of(res);
	}

}