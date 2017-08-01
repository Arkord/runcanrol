import { NgModule } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { IonicModule } from 'ionic-angular';

import { YoutubeVideoPlayerPage } from './youtube-video-player.page';

@NgModule({
	imports: [IonicModule],
	declarations: [YoutubeVideoPlayerPage],
	entryComponents: [YoutubeVideoPlayerPage],
	providers: [YoutubeVideoPlayer]
})
export class YoutubeVideoPlayerModule {

}