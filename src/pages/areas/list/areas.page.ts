import { Component } from '@angular/core';
import { AreasService } from '../areas.service';
import { AreaPreviewPage } from '../preview/gallery-preview.page';
import { NavController } from 'ionic-angular';

@Component({
	templateUrl: 'areas.html'
})
export class GalleriesPage {
	private nav: NavController;
	private AreasService: AreasService;
	areas: any;

	constructor(GalleriesService: AreasService, nav: NavController) {
		this.AreasService = GalleriesService;
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
