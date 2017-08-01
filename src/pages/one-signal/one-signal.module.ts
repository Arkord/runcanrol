import { NgModule } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { IonicModule } from 'ionic-angular';
import { OneSignalListenerService } from './one-signal-listener.service';
import { OneSignalSenderService } from './one-signal-sender.service';
import { OneSignalPage } from './one-signal.page';

@NgModule({
	imports: [IonicModule],
	declarations: [OneSignalPage],
	entryComponents: [OneSignalPage],
	providers: [
		OneSignalListenerService,
		OneSignalSenderService,
		OneSignal
	]
})
export class OneSignalModule {

}