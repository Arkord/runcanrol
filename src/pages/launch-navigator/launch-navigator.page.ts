import { Component } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { ActionSheetController } from 'ionic-angular';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'launch-navigator.html'
})
export class LaunchNavigatorPage {
	destination: string = 'Toronto, ON';
	actionSheetCtrl: ActionSheetController;

	constructor(actionSheetCtrl: ActionSheetController, private launch: LaunchNavigator) {
		this.actionSheetCtrl = actionSheetCtrl;
	}

	launchNavigator() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Available Apps',
			buttons: [
				{
					text: 'Google Maps',
					handler: () => {
						let options: LaunchNavigatorOptions = {
							app: this.launch.APP.GOOGLE_MAPS
						};

						this.launch.navigate(this.destination, options)
							.then(
								success => console.log('Launched navigator'),
								error => console.log('Error launching navigator', error)
							);
					}
				}, {
					text: 'Uber',
					handler: () => {
						alert('Archive clicked');
					}
				}, {
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});
		actionSheet.present();
	}
}
