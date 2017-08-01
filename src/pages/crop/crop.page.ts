import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'crop.html'
})
export class CropPage {
	imageFromLib: any;
	cropImage: any;

	constructor(private crop: Crop, private camera: Camera) {
	}

	makeCropImage() {
		let fileUri = this.imageFromLib;
		if (fileUri.indexOf('file://') !== 0) {
			fileUri = 'file://' + fileUri;
		}
		console.log(fileUri);
		this.crop.crop(fileUri, { quality: 75 })
			.then(
				newImage => this.cropImage = newImage,
				error => console.error('Error cropping image', JSON.stringify(error))
			);
	}

	getPicture() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let options = {
			sourceType: 2,
			quality: 50,
			targetWidth: 720,
			correctOrientation: true,
			encodingType: 0
		};
		this.camera.getPicture(options).then((imageData) => {
			this.imageFromLib = imageData;
		}, (err) => {
			console.log(err);
		});
	}
}
