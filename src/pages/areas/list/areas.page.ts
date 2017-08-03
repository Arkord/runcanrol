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
	areas: any;

	constructor(AreasService: AreasService, nav: NavController) {
		this.AreasService = AreasService;
		this.nav = nav;
		this.AreasService.all().subscribe(
			response => this.areas = response
		)
	}

	goToArea(id) {
		this.nav.push(AreaPreviewPage, {
			id: id
		});
	}

}
