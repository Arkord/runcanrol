import { NgModule } from '@angular/core';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { IonicModule } from 'ionic-angular';

import { StreamingMediaPage } from './streaming-media.page';

@NgModule({
	imports: [IonicModule],
	declarations: [StreamingMediaPage],
	entryComponents: [StreamingMediaPage],
	providers: [StreamingMedia]
})
export class StreamingMediaModule {

}