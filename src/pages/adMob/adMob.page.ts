import { Component } from '@angular/core';
import { AdMob } from '@ionic-native/admob';
import { Platform } from 'ionic-angular';
import { Config } from '../../config';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'adMob.html'
})
export class AdMobPage {
	platform: Platform;

	constructor(platform: Platform, private admob: AdMob) {
		this.platform = platform;
	}

	ionViewDidEnter() {
		this.showBanner();
	}

	ionViewWillLeave() {
		this.admob.hideBanner();
	}

	showBanner() {
		if (!isCordovaAvailable()) {
			return false;
		}

		let admobid;
		if (this.platform.is('android')) {
			admobid = {
				banner: Config.androidPublisherKey
			};
		} else if (this.platform.is('ios')) {
			admobid = {
				banner: Config.iosPublisherKey
			};
		}

		this.admob.createBanner({
			adId: admobid.banner,
			position: 8, // BOTTOM_CENTER
			autoShow: true
		});
	}
}
