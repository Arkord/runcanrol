import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Stripe, StripeCardTokenParams } from '@ionic-native/stripe';
import { Config } from '../../config';

@Component({
	templateUrl: './stripe.html'
})
export class StripePage {
	months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	years: number[] = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2025];
	card: StripeCardTokenParams;
	amount: string = '50';

	constructor(private stripe: Stripe, private http: Http) {
		this.card = {
			number: '4111111111111111',
			cvc: '123',
			expMonth: 1,
			expYear: 2020
		};
	}

	makeStripePayment() {
		console.log('Set pub key');
		this.stripe.setPublishableKey(Config.stripePubKey);

		console.log('Creating token for: ', JSON.stringify(this.card));
		this.stripe.createCardToken(this.card)
			.then(
				(token) => {
					console.log('Token received: ', token);

					let data = {
						'stripetoken': token,
						'amount': this.amount
					};

					let headers = new Headers();
					headers.append('Content-Type', 'application/json');
					this.http.post('http://b31df29b.ngrok.io/processpay', JSON.stringify(data), { headers: headers })
						.subscribe(
							(res) => {
								if (res.json().success) {
									alert('The payment has been made');
								} else {
									alert('The payment hasn\'t been made. See console');
								}
							},
							error => {
								console.log('error: ', error);
								alert('The payment hasn\'t been made. See console');
							}
						);
				},
				error => {
					console.log('Token isn\'t received', error);
				}
			);
	}
}
