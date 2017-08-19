import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SitiosPage } from './list/sitios.page';
import { SitiosService } from './sitios.service';

@NgModule({
	declarations: [
		SitiosPage
	],
	entryComponents: [
		SitiosPage
	],
	imports: [
		IonicModule
	],
	providers: [SitiosService]
})
export class SitiosModule {

}