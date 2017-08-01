import { NgModule } from '@angular/core';
import { Stripe } from '@ionic-native/stripe';
import { IonicModule } from 'ionic-angular';

import { StripePage } from './stripe.page';

@NgModule({
	imports: [IonicModule],
	declarations: [
		StripePage
	],
	entryComponents: [
		StripePage
	],
	providers: [Stripe]
})
export class StripeModule {

}