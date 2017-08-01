import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PayPalPage } from './paypal.page';
import { PayPal } from '@ionic-native/paypal';

@NgModule({
	imports: [IonicModule],
	declarations: [
		PayPalPage
	],
	entryComponents: [
		PayPalPage
	],
	providers: [PayPal]
})
export class PayPalModule {

}