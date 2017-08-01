import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'call-number.html'
})
export class CallNumberPage {
	number: string;

	constructor(private callNmb: CallNumber) {
	}

	callNumber() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.callNmb.callNumber(this.number, true)
			.then(() => console.log('Launched dialer!'));
	}
}
