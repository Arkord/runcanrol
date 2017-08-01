import { NgModule } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { IonicModule } from 'ionic-angular';

import { CallNumberPage } from './call-number.page';

@NgModule({
	imports: [IonicModule],
	declarations: [CallNumberPage],
	entryComponents: [CallNumberPage],
	providers: [CallNumber]
})
export class CallNumberModule {

}