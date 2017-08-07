import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class EventsService {
	private http: Http;
	private result: any;
	private events: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
		this.events = []
	}

	all() {
		let url = 'https://kingsware.maxapex.net/apex/runcanrol/api/eventosg/';
		return this.http.get(url)
			.map(response =>  this.transform(response.json().items))
	}

	transform(events) {
		this.events = [];
		for (let i = 0; i < events.length; i++) {
			this.events.push({
				title: events[i].nombre,
				startTime: moment(events[i].fecha_inicio, 'DD-MM-YY h:m:s A').toDate(),
				endTime: moment(events[i].fecha_fin, 'DD-MM-YY h:m:s A').toDate(),
				allDay: false,
				description: events[i].descripcion,
				location: events[i].ubicacion_maps
			});
		}
		console.log(this.events);
		return this.events;
	}

}