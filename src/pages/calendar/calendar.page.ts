import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'calendar.html'
})
export class CalendarPage {
	eventTitle: string;
	eventLocation: string;
	eventNotes: string;
	calendarName: string;
	startDate: any;
	endDate: any;
	showDate: any;

	constructor(private calendar: Calendar) {
	}

	createCalendar() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.calendar.createCalendar(this.calendarName).then(
			msg => alert('Done'),
			err => alert(err)
		);
	};

	openCalendar() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let date = new Date(this.showDate);
		this.calendar.openCalendar(date);
	}

	createEvent() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let start = new Date(this.startDate);
		let end = new Date(this.endDate);
		this.calendar.createEvent(this.eventTitle, this.eventLocation, this.eventNotes, start, end)
			.then(() => alert('Done'), err => alert('Error'));
	}
}
