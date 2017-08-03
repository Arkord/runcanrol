import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AreaPreviewPage } from './preview/area-preview.page';
import { AreaPage } from './item/area.page';
import { AreasPage } from './list/areas.page';
import { AreasService } from './areas.service';

@NgModule({
	declarations: [
		AreasPage,
		AreaPage,
		AreaPreviewPage
	],
	entryComponents: [
		AreasPage,
		AreaPage,
		AreaPreviewPage
	],
	imports: [
		IonicModule
	],
	providers: [AreasService]
})
export class AreasModule {

}