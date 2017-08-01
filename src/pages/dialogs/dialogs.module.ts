import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { DialogsPage } from './dialogs.page';
import { Dialogs } from '@ionic-native/dialogs';

@NgModule({
	imports: [IonicModule],
	declarations: [DialogsPage],
	entryComponents: [DialogsPage],
	providers: [Dialogs]
})
export class DialogsModule {

}