import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'social-sharing.html'
})
export class SocialSharingPage {
	emailSubject: string;
	emailMassage: string;
	emails: string;
	facebookSubject: string;
	facebookMassage: string;
	facebookImage: any;
	instagramImage: any;

	constructor(private socialSharing: SocialSharing) {
		this.facebookImage = 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg';
		this.instagramImage = 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg';
	}

	shareViaEmail() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.socialSharing.canShareViaEmail().then(
			() => {
				this.socialSharing.shareViaEmail(this.emailMassage, this.emailSubject, [this.emails]);
			},
			reason => alert(reason)
		);
	}

	shareViaFacebook() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.socialSharing.shareViaFacebook(this.facebookMassage, this.facebookImage, 'https://www.facebook.com/');
	}
}
