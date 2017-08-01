import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { NetworkPage } from './network.page';
import { Network } from '@ionic-native/network';

@NgModule({
	imports: [IonicModule],
	declarations: [NetworkPage],
	entryComponents: [NetworkPage],
	providers: [Network]
})
export class NetworkModule {

}