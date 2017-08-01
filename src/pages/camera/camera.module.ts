import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicModule } from 'ionic-angular';

import { CameraPage } from './camera.page';

@NgModule({
	imports: [IonicModule],
	declarations: [CameraPage],
	entryComponents: [CameraPage],
	providers: [Camera]
})
export class CameraModule {

}