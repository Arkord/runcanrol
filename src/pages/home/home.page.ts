import { Component, OnInit } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomeService } from './home.service';
import { AreasPage } from '../areas/list/areas.page';
import { EventsPage } from '../events/events.page';
import { SitiosPage } from '../sitios/list/sitios.page';
import { ClubsPage } from '../clubs/list/clubs.page';
import { ProductsStoresPage } from '../products/stores/products.stores.page';
import { PromocionesPage } from '../promociones/list/promociones.page';

import { Tile } from './models/tile.model';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
	templateUrl: 'home.html'
})
export class HomePage {
	public tiles: Tile[][];
	slides: any;

	private HomeService: HomeService;
	private nav: Nav;

	constructor(nav: Nav, HomeService: HomeService, private InAppBrowser: InAppBrowser) {
		this.HomeService = HomeService;
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
		this.nav.push(tile.component);
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
			component: PromocionesPage
		}, {
			title: 'Tienda y Más',
			path: 'productos',
			icon: 'shop.jpg',
			component: ProductsStoresPage
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

	ngOnInit() {
		this.HomeService.getSponsors().subscribe(response => this.slides = response);
	}

	launch(url: string) {
		const browser = this.InAppBrowser.create(url, '_system');
	}
}
