import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'flashlight.html'
})
export class FlashlightPage {
	constructor(private flashlight: Flashlight) {

	}

	turnOnToOff() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.flashlight.available().then((isAvailable) => {
			if (isAvailable) {
				this.flashlight.switchOn().then(() => console.log('done'));

				setTimeout(() => {
					this.flashlight.switchOff();
				}, 3000);
			}
		});
	}

	turnOn() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.flashlight.available().then((isAvailable) => {
			if (isAvailable) {
				this.flashlight.switchOn().then(() => console.log('done'));
			}
		});
	}

	turnOff() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.flashlight.available().then((isAvailable) => {
			if (isAvailable) {
				if (this.flashlight.isSwitchedOn()) {
					this.flashlight.switchOff().then(() => console.log('done'));
				}
			}
		});
	}

	toggle() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.flashlight.available().then((isAvailable) => {
			if (isAvailable) {
				this.flashlight.toggle().then(() => console.log('done'));
			}
		});
	}
}
