import { NavParams } from 'ionic-angular';
import{ Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    templateUrl: './events-preview.html'
})

export class EventsPreviewPage {
    title: string;
    description: string;
    location: string;
    start: string;
    end: string;

    @ViewChild('map') mapElement: ElementRef;

    constructor(navParams: NavParams) {
        this.description = navParams.get('description');
    }
}
