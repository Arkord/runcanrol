import { Component } from '@angular/core';
import { StreamingAudioOptions, StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Config } from '../../config';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'streaming-media.html'
})
export class StreamingMediaPage {

	constructor(private streamingMedia: StreamingMedia) {
	}

	playVideo() {
		if (!isCordovaAvailable()) {
			return;
		}

		let options: StreamingVideoOptions = {
			successCallback: () => {
				console.log('Video played');
			},
			errorCallback: (e) => {
				console.log('Error streaming', e);
			},
			orientation: 'landscape'
		};
		this.streamingMedia.playVideo(Config.videoUrl, options);
	}

	playAudio() {
		if (!isCordovaAvailable()) {
			return;
		}

		let options: StreamingAudioOptions = {
			bgColor: '#ffffff',
			initFullscreen: false,
			successCallback: () => {
				console.log('Audio played');
			},
			errorCallback: (e) => {
				console.log('Error streaming', e);
			}
		};

		this.streamingMedia.playAudio(Config.audioUrl, options);
	}

	stopAudio() {
		if (!isCordovaAvailable()) {
			return;
		}

		this.streamingMedia.stopAudio();
	}
}
