import { Component } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'date-picker.html'
})
export class DatePickerPage {
	gotDate: Date;

	constructor(private datePicker: DatePicker) {
	}

	show() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.datePicker.show({
			date: new Date(),
			mode: 'date'
		}).then(
			date => {
				this.gotDate = date;
			},
			err => console.log('Error occurred while getting date: ', err)
		);
	}
}
