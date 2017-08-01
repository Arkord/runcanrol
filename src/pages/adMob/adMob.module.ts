import { NgModule } from '@angular/core';
import { AdMob } from '@ionic-native/admob';
import { IonicModule } from 'ionic-angular';

import { AdMobPage } from './adMob.page';

@NgModule({
	imports: [IonicModule],
	declarations: [AdMobPage],
	entryComponents: [AdMobPage],
	providers: [AdMob]
})
export class AdMobModule {

}