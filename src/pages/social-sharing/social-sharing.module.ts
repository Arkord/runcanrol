import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { SocialSharingPage } from './social-sharing.page';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
	imports: [IonicModule],
	declarations: [SocialSharingPage],
	entryComponents: [SocialSharingPage],
	providers: [SocialSharing]
})
export class SocialSharingModule {

}