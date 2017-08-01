import { Component } from '@angular/core';
import { Brightness } from '@ionic-native/brightness';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'brightness.html'
})
export class BrightnessPage {
	brightness: number;
	isCordova: boolean = true;

	constructor(private bright: Brightness) {
		if (!isCordovaAvailable()) {
			this.isCordova = false;
		}
	}

	onChange(newValue) {
		this.bright.setBrightness(newValue / 100);
	}
}
