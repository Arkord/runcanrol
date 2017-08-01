import { NgModule } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { IonicModule } from 'ionic-angular';

import { TextToSpeechPage } from './text-to-speech.page';

@NgModule({
	imports: [IonicModule],
	declarations: [TextToSpeechPage],
	entryComponents: [TextToSpeechPage],
	providers: [TextToSpeech]
})
export class TextToSpeechModule {

}