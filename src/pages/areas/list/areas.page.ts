import { Component, ViewChild, ElementRef } from '@angular/core';
import { AreasService } from '../areas.service';
import { AreaPreviewPage } from '../preview/area-preview.page';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
	templateUrl: 'areas.html'
})
export class AreasPage {
	private nav: NavController;
	private AreasService: AreasService;
	areas: any;

	@ViewChild('map') mapElement: ElementRef;
	map: any;

	constructor(AreasService: AreasService, nav: NavController) {
		this.AreasService = AreasService;
		this.nav = nav;
		this.AreasService.all().subscribe(
			response => this.areas = response
		)
	}

	ionViewDidLoad(){
		this.loadMap();
	}

	loadMap() {
		let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
		let mapOptions = {
		center: latLng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		}
	
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}

	goToArea(id) {
		this.nav.push(AreaPreviewPage, {
			id: id
		});
	}

}
