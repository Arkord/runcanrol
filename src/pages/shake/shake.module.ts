import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { ShakePage } from './shake.page';
import { Shake } from '@ionic-native/shake';

@NgModule({
	imports: [IonicModule],
	declarations: [ShakePage],
	entryComponents: [ShakePage],
	providers: [Shake]
})
export class ShakeModule {

}