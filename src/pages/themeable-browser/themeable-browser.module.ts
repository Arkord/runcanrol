import { NgModule } from '@angular/core';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { IonicModule } from 'ionic-angular';

import { ThemeableBrowserPage } from './themeable-browser.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ThemeableBrowserPage],
	entryComponents: [ThemeableBrowserPage],
	providers: [ThemeableBrowser]
})
export class ThemeableBrowserModule {

}