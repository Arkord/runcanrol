import { Component } from '@angular/core';
import { Shake } from '@ionic-native/shake';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'shake.html'
})
export class ShakePage {
	shake: boolean = false;

	constructor(shake: Shake) {
		if (isCordovaAvailable()) {
			this.shake = true;
			shake.startWatch(60).subscribe(() => {
				alert('shaking');
			});
		}
	}
}
