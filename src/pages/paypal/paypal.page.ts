import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { PayPal, PayPalConfiguration, PayPalPayment } from '@ionic-native/paypal';
import { AlertController } from 'ionic-angular';
import { Config } from '../../config';

@Component({
	templateUrl: 'paypal.html'
})
export class PayPalPage {
	private price: any;
	private name: any;
	private store: any;
	payment: PayPalPayment;
	currencies = ['MXN'];

	constructor(private payPal: PayPal, private nav: NavParams, public alertCtrl: AlertController) {
		this.price = nav.get("price");
		this.name = nav.get("name");
		this.store = nav.get("store");

		let product =`${this.name} (${this.store})`;

		this.payment = new PayPalPayment(this.price, 'MXN', product, 'sale')
	}
	

	makePayment() {
		this.payPal.init({
			PayPalEnvironmentProduction: Config.payPalEnvironmentProduction,
			PayPalEnvironmentSandbox: Config.payPalEnvironmentSandbox
		}).then(() => {
			this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({})).then(() => {
				this.payPal.renderSinglePaymentUI(this.payment).then((response) => {
					//alert(`Pago exitoso. Orden = ${response.response.id}`);
					const alert = this.alertCtrl.create({
						title: 'Pago exitoso',
						subTitle: `Su orden: ${response.response.id}`,
						buttons: ['Aceptar']
					  });
					  alert.present();
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
