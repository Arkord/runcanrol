import { Component } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'clipboard.html'
})
export class ClipboardPage {
	copyText: string;
	pasteText: string;

	constructor(private clipboard: Clipboard) {
	}

	copy() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.clipboard.copy(this.copyText);
	}

	paste() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.clipboard.paste().then(
			(resolve: string) => this.pasteText = resolve,
			(reject: string) => alert('Error: ' + reject)
		);
	}
}
