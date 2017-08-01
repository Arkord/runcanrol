import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'vibrate.html'
})
export class VibratePage {

	constructor(private vibration: Vibration) {
	}

	vibrate() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.vibration.vibrate(1000);
	}

	vibrateWithPause() {
		if (!isCordovaAvailable()) {
			return false;
		}
		// Vibrate 2 seconds
		// Pause for 1 second
		// Vibrate for 2 seconds
		// Patterns work on Android and Windows only
		this.vibration.vibrate([2000, 1000, 2000]);
	}
}
