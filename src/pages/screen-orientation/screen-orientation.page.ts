import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'screen-orientation.html'
})
export class ScreenOrientationPage {
	orientation: string;

	constructor(private screenOrientation: ScreenOrientation) {
	}

	setOrientation() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.screenOrientation.lock(this.orientation);
	}

	unlockOrientation() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.screenOrientation.unlock();
	}
}
