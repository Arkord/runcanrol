import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { LocalNotificationsPage } from './local-notifications.page';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
	imports: [IonicModule],
	declarations: [LocalNotificationsPage],
	entryComponents: [LocalNotificationsPage],
	providers: [LocalNotifications]
})
export class LocalNotificationsModule {

}