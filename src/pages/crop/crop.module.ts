import { NgModule } from '@angular/core';
import { Crop } from '@ionic-native/crop';
import { IonicModule } from 'ionic-angular';

import { CropPage } from './crop.page';

@NgModule({
	imports: [IonicModule],
	declarations: [CropPage],
	entryComponents: [CropPage],
	providers: [Crop]
})
export class CropModule {

}