import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { PromocionesPage } from './list/promociones.page';
import { PromocionesService } from './promociones.service';

@NgModule({
	declarations: [
		PromocionesPage
	],
	entryComponents: [
		PromocionesPage
	],
	imports: [
		IonicModule
	],
	providers: [PromocionesService]
})
export class PromocionesModule {

}