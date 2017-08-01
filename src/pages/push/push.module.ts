import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PushListenerService } from './push-listener.service';
import { PushSenderService } from './push-sender.service';

import { PushPage } from './push.page';

@NgModule({
	imports: [IonicModule],
	declarations: [PushPage],
	entryComponents: [PushPage],
	providers: [
		PushSenderService,
		PushListenerService
	]
})
export class PushModule {

}