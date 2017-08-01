import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'network.html'
})
export class NetworkPage {
	status: string;
	networkConnection: string;

	constructor(private network: Network) {
		if (isCordovaAvailable()) {
			if (this.network.type && this.network.type !== 'none') {
				this.status = 'connected';
				this.networkConnection = this.network.type;
			} else {
				this.status = 'disconnected';
				this.networkConnection = 'no network connection';
			}
			this.watchDisconnect();
			this.watchConnect();
		}
	}

	watchDisconnect() {
		this.network.onDisconnect().subscribe(() => {
			this.status = 'disconnected';
			setTimeout(() => {
				this.networkConnection = this.network.type;
			}, 3000);
		});
	}

	watchConnect() {
		this.network.onConnect().subscribe(() => {
			this.status = 'connected';

			setTimeout(() => {
				this.networkConnection = this.network.type;
				if (this.network.type && this.network.type !== 'none') {
					alert(`we got a '${this.network.type}' connection!`);
				}
			}, 3000);
		});
	}
}
