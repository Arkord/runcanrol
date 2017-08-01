import { Component } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'spinner-dialog.html'
})
export class SpinnerDialogPage {

	constructor(private spinnerDialog: SpinnerDialog) {

	}

	showSpinner() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.spinnerDialog.show('Example', 'Loading..');
		setTimeout(() => {
			this.spinnerDialog.hide();
		}, 5000);
	}
}
