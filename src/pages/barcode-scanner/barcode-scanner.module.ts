import { NgModule } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicModule } from 'ionic-angular';

import { BarcodeScannerPage } from './barcode-scanner.page';

@NgModule({
	imports: [IonicModule],
	declarations: [BarcodeScannerPage],
	entryComponents: [BarcodeScannerPage],
	providers: [BarcodeScanner]
})
export class BarcodeScannerModule {

}