import { NavParams } from 'ionic-angular';
import{ Component, ViewChild, ElementRef } from '@angular/core';

import { style } from './events-preview.style';

@Component({
    templateUrl: './events-preview.html'
})

export class EventsPreviewPage {
    private mapStyle = style;
    title: string;
    description: string;
    location: string;
    start: string;
    end: string;
    cost: string;
    type: string

    @ViewChild('map') mapElement: ElementRef;
    map: any;
 
    constructor(navParams: NavParams) {
        this.title = navParams.get('title');
        this.description = navParams.get('description');
        this.location = navParams.get('location');
        this.start = navParams.get('start');
        this.end = navParams.get('end');
        this.cost = navParams.get('cost');
        this.type = navParams.get('type');
    }

    ionViewDidLoad(){
            this.loadMap(this.title, this.location);
	}

    loadMap(nombre, ubicacion_maps) {
		let coords = ubicacion_maps.split(',');
		let latLng = new google.maps.LatLng(coords[0], coords[1]);
 
		let mapOptions = {
		center: latLng,
		zoom: 15,
		styles: this.mapStyle,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		}
	
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

		let marker = new google.maps.Marker({
			position: latLng,
			map: this.map,
			title: nombre
		});

	}
}
