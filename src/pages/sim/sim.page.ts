import { Component } from '@angular/core';
import { Sim } from '@ionic-native/sim';

@Component({
	templateUrl: 'sim.html'
})
export class SimPage {
	carrierName: string;
	countryCode: string;
	mcc: number;
	mnc: number;

	constructor(private sim: Sim) {
		this.getSimInfo();
	}

	getSimInfo() {
		this.sim.getSimInfo().then(
			(info) => {
				this.carrierName = info.carrierName;
				this.countryCode = info.countryCode;
				this.mcc = info.mcc;
				this.mnc = info.mnc;
			},
			(err) => alert('Unable to get sim info: ' + err)
		);
	}
}
