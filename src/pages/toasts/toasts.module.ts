import { NgModule } from '@angular/core';
import { Toast } from '@ionic-native/toast';
import { IonicModule } from 'ionic-angular';

import { ToastsPage } from './toasts.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ToastsPage],
	entryComponents: [ToastsPage],
	providers: [Toast]
})
export class ToastsModule {

}