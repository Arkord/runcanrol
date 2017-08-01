import { NgModule } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard';
import { IonicModule } from 'ionic-angular';

import { ClipboardPage } from './clipboard.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ClipboardPage],
	entryComponents: [ClipboardPage],
	providers: [Clipboard]
})
export class ClipboardModule {

}