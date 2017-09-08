import { Component } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { ClubPreviewPage } from '../preview/club-preview.page';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
	templateUrl: 'clubs.html'
})
export class ClubsPage {
	private nav: NavController;
	private ClubsService: ClubsService;
	tipo: string;
	clubs: any;
	tipos: any;
	zona: string;
	zonas: any;

	constructor(ClubsService: ClubsService, nav: NavController, private InAppBrowser: InAppBrowser) {
		this.ClubsService = ClubsService;
		this.nav = nav;
		this.ClubsService.all().subscribe(
			response => this.clubs = response
		)
		this.ClubsService.getZonas().subscribe(
			response => this.zonas = response
		)
		
	}

	onChange() {
		console.log(this.tipo);
		if(this.zona == '0') {
			this.ClubsService.all().subscribe(
				response => this.clubs = response
			)
		}
		else {
			this.ClubsService.filter(this.zona).subscribe(
				response => this.clubs = response
			)
		}
	}

	launch(url: string) {
		const browser = this.InAppBrowser.create(url, '_self');
	}

	goToMap(name, coords) {
		if(coords) {
			this.nav.push(ClubPreviewPage, {
				name: name,
				coords: coords
			});
		}
		
	}

}
