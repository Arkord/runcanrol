import { NgModule } from '@angular/core';
import { LaunchNavigatorPage } from './launch-navigator.page';
import { IonicModule } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
	declarations: [LaunchNavigatorPage],
	entryComponents: [LaunchNavigatorPage],
	imports: [IonicModule],
	providers: [LaunchNavigator]
})
export class LaunchNavigatorModule {

}