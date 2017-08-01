import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'camera.html'
})
export class CameraPage {
	picture: any;

	constructor(private camera: Camera) {
	}

	getPicture() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.camera.getPicture().then((imageData) => {
			this.picture = imageData;
		}, (err) => {
			console.log(err);
		});
	}
}
