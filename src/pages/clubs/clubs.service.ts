import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { CLUBS } from './tipos-clubs';

@Injectable()
export class ClubsService {
	private http: Http;
	private result: any;
	private resultZonas: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
		this.resultZonas = [];
	}

	all() {
		let url = 'http://www.operhum.com/ords/runcanrol/api/clubs/';
		return this.http.get(url)
			.map(response => this.result = response.json().items);
	}

	getZonas() {
		let url = 'http://www.operhum.com/ords/runcanrol/api/zonas/';
		return this.http.get(url)
			.map(response => this.resultZonas = response.json().items);
	}

	getTipos() {
		return CLUBS;
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