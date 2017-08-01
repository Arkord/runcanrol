import { Component } from '@angular/core';
import { PayPal, PayPalConfiguration, PayPalPayment } from '@ionic-native/paypal';
import { Config } from '../../config';

@Component({
	templateUrl: 'paypal.html'
})
export class PayPalPage {
	payment: PayPalPayment = new PayPalPayment('10.10', 'USD', 'TV', 'sale');
	currencies = ['EUR', 'USD'];

	constructor(private payPal: PayPal) {
	}

	makePayment() {
		this.payPal.init({
			PayPalEnvironmentProduction: Config.payPalEnvironmentProduction,
			PayPalEnvironmentSandbox: Config.payPalEnvironmentSandbox
		}).then(() => {
			this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({})).then(() => {
				this.payPal.renderSinglePaymentUI(this.payment).then((response) => {
					alert(`Successfully paid. Status = ${response.response.state}`);
					console.log(response);
				}, () => {
					console.error('Error or render dialog closed without being successful');
				});
			}, () => {
				console.error('Error in configuration');
			});
		}, () => {
			console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
		});
	}
}
