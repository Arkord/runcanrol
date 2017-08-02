import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AreasService {
	private http: Http;
	private result: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
	}

	all() {
		let url = 'https://kingsware.maxapex.net/apex/runcanrol/areasg/';
		return this.http.get(url)
			.map(response => this.result = response.json().result)
	}

	get(area_id) {
		for (let i = 0; i < this.result.length; i++) {
			if (this.result[i].id === area_id) {
				return Observable.of(this.result[i]);
			}
		}
		return Observable.of(null);
	}
}