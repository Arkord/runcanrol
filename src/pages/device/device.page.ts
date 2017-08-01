import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'device.html'
})
export class DevicePage implements OnInit {
	constructor(public device: Device) {
	}

	ngOnInit() {
		if (!isCordovaAvailable()) {
			return false;
		}
	}
}
