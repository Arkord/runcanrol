import { Component } from '@angular/core';
import { Toast } from '@ionic-native/toast';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'toasts.html'
})
export class ToastsPage {
	constructor(private toast: Toast) {
	}

	showToast() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.toast.show('standard toast', '5000', 'center').subscribe(
			toast => {
				console.log(toast);
			}
		);
	}

	showShortBottom() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.toast.show('short toast', 'short', 'bottom').subscribe(
			toast => {
				console.log(toast);
			}
		);
	}

	showLongTop() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.toast.show('long toast', 'long', 'top').subscribe(
			toast => {
				console.log(toast);
			}
		);
	}
}
