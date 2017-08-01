import { NgModule } from '@angular/core';
import { ActionSheet } from '@ionic-native/action-sheet';
import { IonicModule } from 'ionic-angular';

import { ActionsheetPage } from './actionsheet.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ActionsheetPage],
	entryComponents: [ActionsheetPage],
	providers: [ActionSheet]
})
export class ActionsheetModule {

}