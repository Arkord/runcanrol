import { NgModule } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { IonicModule } from 'ionic-angular';

import { PhotoViewerPage } from './photo-viewer.page';

@NgModule({
	imports: [IonicModule],
	declarations: [PhotoViewerPage],
	entryComponents: [PhotoViewerPage],
	providers: [PhotoViewer]
})
export class PhotoViewerModule {

}