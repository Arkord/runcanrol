import { Component } from '@angular/core';
import { isCordovaAvailable } from '../../services/is-cordova-available';
import { Badge } from '@ionic-native/badge';

@Component({
	templateUrl: 'badge.html'
})
export class BadgePage {
	increaseBy: string;
	decreaseBy: string;
	budgeNumber: string;

	constructor(private badge: Badge) {
	}

	setBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.badge.set(parseInt(this.budgeNumber, 10)).then(response => this.budgeNumber = response);
	}

	increaseBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.badge.increase(parseInt(this.increaseBy, 10)).then(response => this.budgeNumber = response);
	}

	decreaseBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.badge.decrease(parseInt(this.decreaseBy, 10)).then(response => this.budgeNumber = response);
	}

	clearBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.badge.clear();
		this.budgeNumber = '0';
	}

	getBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.badge.get().then(response => this.budgeNumber = response);
	}
}
