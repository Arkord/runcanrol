import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import _ from 'lodash';

import { style } from './club-preview.style';

declare var google;

@Component({
	templateUrl: 'club-preview.html'
})
export class ClubPreviewPage {
	private nav: NavController;
	private mapStyle = style;
	map: any;

	@ViewChild('map') mapElement: ElementRef;
	nombre: string;
	coordenadas: string;

	constructor(navParams: NavParams) {
		this.nombre = navParams.get('name');
		this.coordenadas = navParams.get('coords');
	}

	ionViewDidLoad(){
		this.loadMap(this.nombre, this.coordenadas);
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