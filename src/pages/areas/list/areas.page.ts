import { Component } from '@angular/core';
import { AreasService } from '../areas.service';
import { AreaPreviewPage } from '../preview/area-preview.page';
import { NavController } from 'ionic-angular';

@Component({
	templateUrl: 'areas.html'
})
export class AreasPage {
	private nav: NavController;
	private AreasService: AreasService;
	tipo: string;
	areas: any;
	tipos: any;

	constructor(AreasService: AreasService, nav: NavController) {
		this.AreasService = AreasService;
		this.nav = nav;
		this.AreasService.all().subscribe(
			response => this.areas = response
		)
		this.AreasService.tipos().subscribe(
			response => this.tipos = response
		)
	}

	onChange() {
		console.log(this.tipo);
		this.AreasService.filter(this.tipo).subscribe(
			response => {
				console.log(response, this.areas);
				this.areas = response;
			}
		);
	}

	goToMap(id) {
		this.nav.push(AreaPreviewPage, {
			id: id
		});
	}

}
