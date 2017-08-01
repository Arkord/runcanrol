import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { InsomniaPage } from './insomnia.page';
import { Insomnia } from '@ionic-native/insomnia';

@NgModule({
	imports: [IonicModule],
	declarations: [InsomniaPage],
	entryComponents: [InsomniaPage],
	providers: [Insomnia]
})
export class InsomniaModule {

}