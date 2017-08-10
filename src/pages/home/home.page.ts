import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { WordpressListPage } from '../wordpress/list/wordpress.list.page';
import { SlideBoxPage } from '../slide-box/slide-box.page';
import { AreasPage } from '../areas/list/areas.page';
import { EventsPage } from '../events/events.page';

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
			icon: 'care.jpg',
			component: WordpressListPage
		}, {
			title: 'Clubes & Fundaciones',
			path: 'slides',
			icon: 'club.jpg',
			component: SlideBoxPage
		}, {
			title: 'Promociones & Descuentos',
			path: 'slides',
			icon: 'promo.jpg',
			component: SlideBoxPage
		}, {
			title: 'Tienda y Más',
			path: 'slides',
			icon: 'shop.jpg',
			component: SlideBoxPage
		}, {
			title: 'Eventos',
			path: 'eventos',
			icon: 'event.jpg',
			component: EventsPage
		}, {
			title: 'Áreas de paseo',
			path: 'areas',
			icon: 'run.jpg',
			component: AreasPage
		}]];
	}
}
