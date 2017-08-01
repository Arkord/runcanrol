import { NgModule } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { IonicModule } from 'ionic-angular';

import { FlashlightPage } from './flashlight.page';

@NgModule({
	imports: [IonicModule],
	declarations: [FlashlightPage],
	entryComponents: [FlashlightPage],
	providers: [Flashlight]
})
export class FlashlightModule {

}