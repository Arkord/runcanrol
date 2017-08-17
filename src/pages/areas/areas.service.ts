import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AreasService {
	private http: Http;
	private result: any;
	private resultTipos: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
		this.resultTipos = [];
	}

	all() {
		let url = 'http://200.57.8.124/ords/runcanrol/api/areasg/';
		return this.http.get(url)
			.map(response => this.result = response.json().items)
	}

	tipos() {
		let url = 'http://200.57.8.124/ords/runcanrol/api/areast/';
		return this.http.get(url)
			.map(response => this.resultTipos = response.json().items)
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