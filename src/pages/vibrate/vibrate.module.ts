import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { VibratePage } from './vibrate.page';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
	imports: [IonicModule],
	declarations: [VibratePage],
	entryComponents: [VibratePage],
	providers: [Vibration]
})
export class VibrateModule {

}