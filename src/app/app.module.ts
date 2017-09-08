import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AgmCoreModule } from '@agm/core';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';
import { CustomComponentsModule } from '../components/custom-components.module';
import { Config } from '../config';
import { ComponentsModule } from '../pages/components/components.module';
import { HomeModule } from '../pages/home/home.module';
import { I18nModule } from '../pages/i18n-capabilities/i18n-capabilities.module';
import { PayPalModule } from '../pages/paypal/paypal.module';
import { ProductsModule } from '../pages/products/products.module';
import { StripeModule } from '../pages/stripe/stripe.module';
import { Base64Service } from '../services/base64.service';
import { MyApp } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreasModule } from '../pages/areas/areas.module';
import { EventsModule } from '../pages/events/events.module';
import { SitiosModule } from '../pages/sitios/sitios.module';
import { ClubsModule } from '../pages/clubs/clubs.module';
import { PromocionesModule } from '../pages/promociones/promociones.module';

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		IonicStorageModule.forRoot(),
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		}),

		CustomComponentsModule,

		ComponentsModule,
		HomeModule,
		ProductsModule,
		StripeModule,
		PayPalModule,
		I18nModule,
		AreasModule,
		EventsModule,
		SitiosModule,
		ClubsModule,
		PromocionesModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		Config,
		Base64Service,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		InAppBrowser,
		StatusBar
	]
})
export class AppModule {
}
