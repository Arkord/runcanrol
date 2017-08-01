import { Component } from '@angular/core';
import { OneSignalListenerService } from './one-signal-listener.service';
import { OneSignalSenderService } from './one-signal-sender.service';

@Component({
	templateUrl: 'one-signal.html'
})
export class OneSignalPage {
	message: string;

	private pushSenderService: OneSignalSenderService;
	private pushListener: OneSignalListenerService;

	constructor(pushSenderService: OneSignalSenderService, pushListener: OneSignalListenerService) {
		this.pushSenderService = pushSenderService;
		this.pushListener = pushListener;
	}

	sendMessage() {
		this.pushSenderService.send(this.message);
	}
}