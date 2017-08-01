import { Component } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'youtube-video-player.html'
})
export class YoutubeVideoPlayerPage {
	videoId: string = 'RfI_mUIvYq8'; // Game of Thrones: The Musical – Emilia Clarke Teaser

	constructor(private youtube: YoutubeVideoPlayer) {
	}

	openVideo() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.youtube.openVideo(this.videoId);
	}

}
