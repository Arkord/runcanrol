import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'text-to-speech.html'
})
export class TextToSpeechPage {
	text: string;

	constructor(private tts: TextToSpeech) {
		this.text = 'Hello Ionic 2';
	}

	speak() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.tts.speak(this.text)
			.then(() => console.log('Success'));
	}
}
