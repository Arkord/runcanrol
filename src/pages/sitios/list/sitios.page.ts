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
	zona: string;
	zonas: any;

	constructor(SitiosService: SitiosService, nav: NavController) {
		this.SitiosService = SitiosService;
		this.nav = nav;
		this.SitiosService.all().subscribe(
			response => this.sitios = response
		)
		this.SitiosService.getZonas().subscribe(
			response => this.zonas = response
		)
		
	}

	onChange() {
		console.log(this.tipo);
		if(this.zona == '0') {
			this.SitiosService.all().subscribe(
				response => this.sitios = response
			)
		}
		else {
			this.SitiosService.filter(this.zona).subscribe(
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
