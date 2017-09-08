import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	
	public google = {
		apiUrl: 'https://www.googleapis.com/oauth2/v3/',
		appId: '400671186930-m07eu77bm43tgr30p90k6b9e1qgsva4p.apps.googleusercontent.com',
		scope: ['email']
	};

	// Paypal
	static payPalEnvironmentSandbox = 'AUp3xO-yveZDMTjZ20GWJO6c_tv7bbHrj3sZC__XyaQ7N64iVd49HRyi5WBPD00ojcHK41_hvl76PbzH';
	static payPalEnvironmentProduction = '';

	static stripePubKey = 'pk_test_Iw14HiEkQn2zxDLNEAGmfcHE';
}