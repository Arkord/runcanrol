import { Component } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'dialogs.html'
})
export class DialogsPage {
	alertMessage: string;
	confirmMessage: string;
	promptMessage: string;
	alertTitle: string;
	confirmTitle: string;
	promptTitle: string;
	times: number;

	constructor(private dialogs: Dialogs) {
	}

	showAlert() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.dialogs.alert(this.alertMessage, this.alertTitle);
	}

	showConfirm() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.dialogs.confirm(this.confirmMessage, this.confirmTitle);
	}

	showPrompt() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.dialogs.prompt(this.promptMessage, this.promptTitle);
	}

	showBeep() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.dialogs.beep(this.times);
	}

}
