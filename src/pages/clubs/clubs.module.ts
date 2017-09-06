import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ClubsPage } from './list/clubs.page';
import { ClubPreviewPage } from './preview/club-preview.page';
import { ClubsService } from './clubs.service';

@NgModule({
	declarations: [
		ClubsPage,
		ClubPreviewPage
	],
	entryComponents: [
		ClubsPage,
		ClubPreviewPage
	],
	imports: [
		IonicModule
	],
	providers: [ClubsService]
})
export class ClubsModule {

}