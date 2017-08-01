import { Component } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia';

@Component({
	templateUrl: 'insomnia.html'
})
export class InsomniaPage {

	constructor(private insomnia: Insomnia) {
	}

	ionViewWillEnter() {
		this.insomnia.keepAwake()
			.then(
				() => console.log('success'),
				() => console.log('error')
			);
	}

	ionViewWillLeave() {
		this.insomnia.allowSleepAgain()
			.then(
				() => console.log('success'),
				() => console.log('error')
			);
	}

}
