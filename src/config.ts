import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	
	public google = {
		apiUrl: 'https://www.googleapis.com/oauth2/v3/',
		appId: '400671186930-m07eu77bm43tgr30p90k6b9e1qgsva4p.apps.googleusercontent.com',
		scope: ['email']
	};

	// Paypal
	static payPalEnvironmentSandbox = '';
	static payPalEnvironmentProduction = 'ASUPACLubs0akW_Gtzy6E3Eu1pJ1uj36en3TWK7XLHdEQrgZvkLtvh-0Il4PWjxPFjrCe2mudgdRoeJ6';

	static stripePubKey = 'pk_test_Iw14HiEkQn2zxDLNEAGmfcHE';
}