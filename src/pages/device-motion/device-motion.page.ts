import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { Subscription } from 'rxjs';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'device-motion.html'
})
export class DeviceMotionPage implements OnInit, OnDestroy {
	currentAcceleration: DeviceMotionAccelerationData;
	private subscription: Subscription;

	constructor(private deviceMotion: DeviceMotion) {
		deviceMotion.getCurrentAcceleration().then(
			(acceleration: DeviceMotionAccelerationData) => this.currentAcceleration = acceleration,
			(error: any) => console.log(error)
		);
	}

	ngOnInit() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.subscription = this.deviceMotion.watchAcceleration({ frequency: 300 })
			.subscribe((acceleration: DeviceMotionAccelerationData) => {
				console.log(JSON.stringify(acceleration));
				this.currentAcceleration = acceleration;
			});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
