import { NgModule } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';
import { IonicModule } from 'ionic-angular';

import { CalendarPage } from './calendar.page';

@NgModule({
	imports: [IonicModule],
	declarations: [CalendarPage],
	entryComponents: [CalendarPage],
	providers: [Calendar]
})
export class CalendarModule {

}