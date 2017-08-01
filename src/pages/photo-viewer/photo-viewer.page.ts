import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'photo-viewer.html'
})
export class PhotoViewerPage {
	image: any;
	imageTitle: string;

	constructor(private photoViewer: PhotoViewer, private camera: Camera) {
	}

	showImage() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.photoViewer.show(this.image, this.imageTitle, { share: true });
	}

	getPicture() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.camera.getPicture().then((imageData) => {
			this.image = imageData;
		}, (err) => {
			console.log(err);
		});
	}
}
