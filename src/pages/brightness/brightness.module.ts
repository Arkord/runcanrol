import { NgModule } from '@angular/core';
import { Brightness } from '@ionic-native/brightness';
import { IonicModule } from 'ionic-angular';

import { BrightnessPage } from './brightness.page';

@NgModule({
	imports: [IonicModule],
	declarations: [BrightnessPage],
	entryComponents: [BrightnessPage],
	providers: [Brightness]
})
export class BrightnessModule {

}