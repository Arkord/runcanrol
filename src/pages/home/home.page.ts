import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { WordpressListPage } from '../wordpress/list/wordpress.list.page';
import { SlideBoxPage } from '../slide-box/slide-box.page';
// import { GoogleMapsPage } from '../google-maps/google-maps.page';
import { Tile } from './models/tile.model';
import { EmailService } from '../../services/email.service';
import { CallService } from '../../services/call.service';
import { MapsService } from '../../services/maps.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { data } from './home-data';

@Component({
	templateUrl: 'home.html'
})
export class HomePage {
	public tiles: Tile[][];

	private emailService: EmailService;
	private callService: CallService;
	private mapsService: MapsService;
	private browserService: InAppBrowserService;
	private nav: Nav;

	constructor(
		emailService: EmailService,
		callService: CallService,
		mapsService: MapsService,
		browserService: InAppBrowserService,
		nav: Nav
	) {
		this.emailService = emailService;
		this.callService = callService;
		this.mapsService = mapsService;
		this.browserService = browserService;
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
		this.nav.setRoot(tile.component);
	}

	public getDirections() {
		this.mapsService.openMapsApp(data.officeLocation);
	}

	public sendEmail() {
		this.emailService.sendEmail(data.email);
	}

	public openFacebookPage() {
		this.browserService.open(data.facebook);
	}

	public callUs() {
		this.callService.call(data.phoneNumber);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Cuidado para tu mascota',
			path: 'wordpress-articles',
			icon: 'heart',
			component: WordpressListPage
		}, {
			title: 'Clubes & Fundaciones',
			path: 'slides',
			icon: 'trophy',
			component: SlideBoxPage
		}, {
			title: 'Promociones & Descuentos',
			path: 'slides',
			icon: 'pricetags',
			component: SlideBoxPage
		}, {
			title: 'Tienda y Más',
			path: 'slides',
			icon: 'card',
			component: SlideBoxPage
		}, {
			title: 'Eventos',
			path: 'slides',
			icon: 'calendar',
			component: SlideBoxPage
		}, {
			title: 'Áreas de paseo',
			path: 'slides',
			icon: 'map',
			component: SlideBoxPage
		}]];
	}
}
