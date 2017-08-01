import { NgModule } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { IonicModule } from 'ionic-angular';

import { SpinnerDialogPage } from './spinner-dialog.page';

@NgModule({
	imports: [IonicModule],
	declarations: [SpinnerDialogPage],
	entryComponents: [SpinnerDialogPage],
	providers: [SpinnerDialog]
})
export class SpinnerDialogModule {

}