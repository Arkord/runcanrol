import { Component } from '@angular/core';
import { SitiosService } from '../sitios.service';
import { SitioPreviewPage } from '../preview/sitio-preview.page';
import { NavController } from 'ionic-angular';

@Component({
	templateUrl: 'sitios.html'
})
export class SitiosPage {
	private nav: NavController;
	private SitiosService: SitiosService;
	tipo: string;
	sitios: any;
	tipos: any;

	constructor(SitiosService: SitiosService, nav: NavController) {
		this.SitiosService = SitiosService;
		this.nav = nav;
		this.SitiosService.all().subscribe(
			response => this.sitios = response
		)
		this.tipos = this.SitiosService.getTipos();
	}

	onChange() {
		console.log(this.tipo);
		if(this.tipo == '5') {
			this.SitiosService.all().subscribe(
				response => this.sitios = response
			)
		}
		else {
			this.SitiosService.byType(this.tipo).subscribe(
				response => this.sitios = response
			)
		}
	}

	goToMap(id) {
		this.nav.push(SitiosService, {
			id: id
		});
	}

}
