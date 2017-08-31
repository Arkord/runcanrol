import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SLIDES } from './home-data';

@Injectable()
export class HomeService {
    private http: Http;
    private result: any;

    constructor(http: Http) {
        this.http = http;
        this.result = [];
    }

    getSponsors() {
        let url = 'http://www.operhum.com/ords/runcanrol/api/publicidad/';
        return this.http.get(url)
            .map(response => this.result = response.json().items);
    }

    getSponsors2() {
        return SLIDES;
    }

}