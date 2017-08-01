import { NgModule } from '@angular/core';
import { DeviceMotion } from '@ionic-native/device-motion';
import { IonicModule } from 'ionic-angular';

import { DeviceMotionPage } from './device-motion.page';

@NgModule({
	imports: [IonicModule],
	declarations: [DeviceMotionPage],
	entryComponents: [DeviceMotionPage],
	providers: [DeviceMotion]
})
export class DeviceMotionModule {

}