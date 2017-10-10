import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	
	public google = {
		apiUrl: 'https://www.googleapis.com/oauth2/v3/',
		appId: '400671186930-m07eu77bm43tgr30p90k6b9e1qgsva4p.apps.googleusercontent.com',
		scope: ['email']
	};

	// Paypal
	static payPalEnvironmentSandbox = 'ASqEI8-G97qAYU3vz3r9D8VKR0jzMTG2tXjdAJUPpGb-pu98SlXmdV67vLLOpKrpDwX279aBd1LeepLT';
	static payPalEnvironmentProduction = '';

	static stripePubKey = 'pk_test_Iw14HiEkQn2zxDLNEAGmfcHE';
}