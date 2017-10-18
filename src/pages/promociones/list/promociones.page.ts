import { Component } from '@angular/core';
import { PromocionesService } from '../promociones.service';
import { NavController } from 'ionic-angular';

@Component({
	templateUrl: 'promociones.html'
})
export class PromocionesPage {
	private nav: NavController;
	private PromocionesService: PromocionesService;
	sitio: string;
	promociones: any;
	sitios: any;

	constructor(PromocionesService: PromocionesService, nav: NavController) {
		this.PromocionesService = PromocionesService;
		this.nav = nav;
		this.PromocionesService.all().subscribe(
			response => this.promociones = response
		)
		this.PromocionesService.sitios().subscribe(
			response => this.sitios = response
		)
	}

	onChange() {
		console.log(this.sitio);
		this.PromocionesService.filter(this.sitio).subscribe(
			response => {
				console.log(response, this.promociones);
				this.promociones = response;
			}
		);
		this.PromocionesService.filter(this.sitio).subscribe(
			response =>  this.promociones = response 
		);
	}

}
