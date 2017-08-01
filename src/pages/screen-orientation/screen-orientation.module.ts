import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { ScreenOrientationPage } from './screen-orientation.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
	imports: [IonicModule],
	declarations: [ScreenOrientationPage],
	entryComponents: [ScreenOrientationPage],
	providers: [ScreenOrientation]
})
export class ScreenOrientationModule {

}