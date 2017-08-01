import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'local-notifications.html'
})
export class LocalNotificationsPage {
	singleText: string;
	multipleTitle: string;
	multipleText_1: string;
	multipleText_2: string;
	delayedText: string;

	constructor(private localNotifications: LocalNotifications) {
	}

	showSingleNotification() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.localNotifications.schedule({
			id: 1,
			text: this.singleText,
			sound: 'file://sound.mp3'
		});
	}

	showMultipleNotification() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.localNotifications.schedule([{
			id: 1,
			text: this.multipleText_1,
			sound: 'file://sound.mp3'
		}, {
			id: 2,
			title: this.multipleTitle,
			text: this.multipleText_2
		}]);
	}

	showDelayedNotification() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.localNotifications.schedule({
			text: this.delayedText,
			at: new Date(new Date().getTime() + 3600),
			led: 'FF0000',
			sound: null
		});
	}
}
