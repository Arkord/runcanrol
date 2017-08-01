import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../config';

@Injectable()
export class OneSignalSenderService {
	private pushUrl = 'https://onesignal.com/api/v1/notifications';

	constructor(private http: Http) {
	}

	send(message) {
		let data = {
			'app_id': Config.oneSignalAppId,
			'contents': { 'en': message },
			'included_segments': ['Active Users']
		};
		let headers = new Headers({
			'Authorization': 'Basic ' + Config.oneSignalRestApiKey,
			'Content-Type': 'application/json'
		});
		let options = new RequestOptions({ headers: headers });
		this.http.post(this.pushUrl, data, options)
			.subscribe(x => console.log(x));
	}
}