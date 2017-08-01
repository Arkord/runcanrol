import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { SimPage } from './sim.page';
import { Sim } from '@ionic-native/sim';

@NgModule({
	imports: [IonicModule],
	declarations: [SimPage],
	entryComponents: [SimPage],
	providers: [Sim]
})
export class SimModule {

}