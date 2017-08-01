import { NgModule } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { IonicModule, Platform } from 'ionic-angular';
import { Config } from '../../config';
import { GoogleAnalyticsPage } from './google-analytics.page';

@NgModule({
	declarations: [GoogleAnalyticsPage],
	entryComponents: [GoogleAnalyticsPage],
	imports: [IonicModule],
	providers: [GoogleAnalytics]
})
export class GoogleAnalyticsModule {
	constructor(platform: Platform, private ga: GoogleAnalytics) {
		platform.ready().then(() => {
			this.ga.startTrackerWithId(Config.googleAnalyticsTrackedID)
				.then(() => {
					console.log('Google analytics is ready now');

					// Tracker is ready
					// You can now track pages or set additional information such as AppVersion or UserId
					this.ga.setAppVersion(Config.googleAnalyticsAppVersion).then(x => console.log('GA: version set', x));
					this.ga.setUserId(Config.googleAnalyticsUserID).then(x => console.log('GA: user ID set', x));
				})
				.catch(e => console.log('Error starting GoogleAnalytics', e));
		});
	}
}