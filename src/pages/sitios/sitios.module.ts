import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SitioPreviewPage } from './preview/sitio-preview.page';
import { SitiosPage } from './list/sitios.page';
import { SitiosService } from './sitios.service';

@NgModule({
	declarations: [
		SitiosPage,
		SitioPreviewPage
	],
	entryComponents: [
		SitiosPage,
		SitioPreviewPage
	],
	imports: [
		IonicModule
	],
	providers: [SitiosService]
})
export class SitiosModule {

}