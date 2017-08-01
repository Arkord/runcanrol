import { NgModule } from '@angular/core';
import { AppAvailability } from '@ionic-native/app-availability';
import { IonicModule } from 'ionic-angular';

import { AppAvailabilityPage } from './app-availability.page';

@NgModule({
	imports: [IonicModule],
	declarations: [AppAvailabilityPage],
	entryComponents: [AppAvailabilityPage],
	providers: [AppAvailability]
})
export class AppAvailabilityModule {

}