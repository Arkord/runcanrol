import { NgModule } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { IonicModule } from 'ionic-angular';

import { DatePickerPage } from './date-picker.page';

@NgModule({
	imports: [IonicModule],
	declarations: [DatePickerPage],
	entryComponents: [DatePickerPage],
	providers: [DatePicker]
})
export class DatePickerModule {

}