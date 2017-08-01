import { NgModule } from '@angular/core';
import { Device } from '@ionic-native/device';
import { IonicModule } from 'ionic-angular';

import { DevicePage } from './device.page';

@NgModule({
	imports: [IonicModule],
	declarations: [DevicePage],
	entryComponents: [DevicePage],
	providers: [Device]
})
export class DeviceModule {

}