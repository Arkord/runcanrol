import { Component } from '@angular/core';
import { AppAvailability } from '@ionic-native/app-availability';
import { Platform } from 'ionic-angular';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'app-availability.html'
})
export class AppAvailabilityPage {
	package: string;

	constructor(platform: Platform, private appAvailability: AppAvailability) {
		this.package = platform.is('ios') ? 'twitter://' : 'com.twitter.android';
	}

	checkApp() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.appAvailability.check(this.package)
			.then(
				(bool: boolean) => alert(`${this.package} is available`),
				(bool: boolean) => alert(`${this.package} is not available`)
			);
	}
}
