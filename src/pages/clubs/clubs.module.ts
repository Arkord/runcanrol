import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ClubsPage } from './list/clubs.page';
import { ClubsService } from './clubs.service';

@NgModule({
	declarations: [
		ClubsPage
	],
	entryComponents: [
		ClubsPage
	],
	imports: [
		IonicModule
	],
	providers: [ClubsService]
})
export class ClubsModule {

}