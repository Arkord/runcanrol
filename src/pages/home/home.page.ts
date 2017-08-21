import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { WordpressListPage } from '../wordpress/list/wordpress.list.page';
import { SlideBoxPage } from '../slide-box/slide-box.page';
import { AreasPage } from '../areas/list/areas.page';
import { EventsPage } from '../events/events.page';
import { SitiosPage } from '../sitios/list/sitios.page';
import { ClubsPage } from '../clubs/list/clubs.page';
import { ProductsListPage } from '../products/list/products.list.page';

// import { GoogleMapsPage } from '../google-maps/google-maps.page';
import { Tile } from './models/tile.model';
import { EmailService } from '../../services/email.service';
import { CallService } from '../../services/call.service';
import { MapsService } from '../../services/maps.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { SLIDES } from './home-data';

@Component({
	templateUrl: 'home.html'
})
export class HomePage {
	public tiles: Tile[][];
	public slides: any;

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
		this.slides = SLIDES;
	}

	public navigateTo(tile) {
		this.nav.setRoot(tile.component);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Cuidado para tu mascota',
			path: 'sitios',
			icon: 'care.jpg',
			component: SitiosPage
		}, {
			title: 'Clubes & Fundaciones',
			path: 'slides',
			icon: 'club.jpg',
			component: ClubsPage
		}, {
			title: 'Promociones & Descuentos',
			path: 'slides',
			icon: 'promo.jpg',
			component: SlideBoxPage
		}, {
			title: 'Tienda y Más',
			path: 'productos',
			icon: 'shop.jpg',
			component: ProductsListPage
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
