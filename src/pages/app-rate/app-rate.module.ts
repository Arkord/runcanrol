import { NgModule } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate';
import { IonicModule, Platform } from 'ionic-angular';
import { Config } from '../../config';

@NgModule({
	imports: [IonicModule],
	providers: [AppRate]
})

export class AppRateModule {
	platform: Platform;

	constructor(platform: Platform, private appRate: AppRate) {
		this.platform = platform;
		this.platform.ready().then(() => {
			if ((<any>window).AppRate) {
				appRate.promptForRating(false);
			}
		});

		if ((<any>window).cordova && (<any>window).AppRate) {
			console.log('INIT APP RATE');
			this.init();
		} else {
			console.log('NO APP RATE PLUGIN FOUND');
		}
	}

	init() {
		this.appRate.preferences.callbacks = {
			onButtonClicked: (buttonIndex) => {
				if (buttonIndex === 1) {
					console.log('onButtonClicked -> Rate It Now');
				} else if (buttonIndex === 2) {
					console.log('onButtonClicked -> Remind Me Later');
				} else if (buttonIndex === 3) {
					console.log('onButtonClicked -> No, Thanks');
				}
			}
		};

		this.appRate.preferences.storeAppURL = {
			ios: Config.iosUrl,
			android: Config.androidUrl
		};

		this.appRate.preferences.usesUntilPrompt = Config.usesUntilRatePrompt;
		this.appRate.preferences.promptAgainForEachNewVersion = true;
	}
}
