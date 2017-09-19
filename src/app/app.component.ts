import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, App, Nav, AlertController } from 'ionic-angular';
import { Network } from "ionic-native";
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home.page';
import { StripePage } from '../pages/stripe/stripe.page';
import { PayPalPage } from '../pages/paypal/paypal.page';
import { SitiosPage } from  '../pages/sitios/list/sitios.page';
import { ClubsPage } from '../pages/clubs/list/clubs.page';
import { ProductsStoresPage } from '../pages/products/stores/products.stores.page';
import { EventsPage } from '../pages/events/events.page';
import { AreasPage } from '../pages/areas/list/areas.page';
import { SplashScreen } from "@ionic-native/splash-screen";


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

	constructor(
		platform: Platform, 
		menu: MenuController,  
		app: App, 
		private statusBar: StatusBar, 
		public splashscreen: SplashScreen,
		private alertCtrl: AlertController
	) {
		platform.registerBackButtonAction(()=> {
			//let view = this.nav.getActive();
			if (!this.nav.canGoBack()) {
				this.platform.exitApp();
			}
			else {
				this.nav.pop({}) 
			}
		});
		
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
			let networkState = Network.type;
			let alert = this.alertCtrl.create({
				title: "Conexión a internet",
				subTitle: "Necesitas conexión a internet para poder ver el contenido de RunCanRol, por favor conéctate a una red y vuelve a abrir la aplicación.",
				buttons: ["OK"]
			});
			if(Network.type == 'none') {
				alert.present();
			}
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
