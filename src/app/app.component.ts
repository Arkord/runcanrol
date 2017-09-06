import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, App, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home.page';
import { ProductsListPage } from '../pages/products/list/products.list.page';
import { CalendarPage } from '../pages/calendar/calendar.page';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { StripePage } from '../pages/stripe/stripe.page';
import { PayPalPage } from '../pages/paypal/paypal.page';
import { SitiosPage } from  '../pages/sitios/list/sitios.page';
import { ClubsPage } from '../pages/clubs/list/clubs.page';
import { ProductsStoresPage } from '../pages/products/stores/products.stores.page';
import { EventsPage } from '../pages/events/events.page';
import { AreasPage } from '../pages/areas/list/areas.page';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	wide: boolean = false;
	genericPages;
	nativePages;
	databasePages;
	thirdpartyPages;
	paymentsPages;
	cssComponentsPages;
	homePage;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(platform: Platform, menu: MenuController,  app: App, private statusBar: StatusBar) {

		this.menu = menu;
		// set up our app
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.homePage = { title: 'Casa', component: HomePage, icon: 'home' };

		this.genericPages = [
			{ title: 'Cuidados', component: SitiosPage, icon: 'heart' },
			{ title: 'Clubs', component: ClubsPage, icon: 'star' },
			{ title: 'Promociones', component: ClubsPage, icon: 'ribbon' },
			{ title: 'Tienda', component: ProductsStoresPage, icon: 'basket' },
			{ title: 'Eventos', component: EventsPage, icon: 'calendar' },
			{ title: 'Áreas', component: AreasPage, icon: 'map' }
		];

		

		this.paymentsPages = [
			{ title: 'Stripe', component: StripePage, icon: 'card' },
			{ title: 'PayPal', component: PayPalPage, icon: 'cash' }
		];

		this.rootPage = HomePage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
		});
	}

	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		let component = page.component;

		this.nav.setRoot(component);
	}
}
