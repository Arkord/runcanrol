import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SitiosService } from '../sitios.service';
import _ from 'lodash';

import { style } from './sitio-preview.style';

declare var google;

@Component({
	templateUrl: 'sitio-preview.html'
})
export class SitioPreviewPage {
	private nav: NavController;
	private SitiosService: SitiosService;
	private mapStyle = style;
	areaId: number;
	groupedPictures: any;
	pictures: any;

	@ViewChild('map') mapElement: ElementRef;
	nombre: string;
	descripcion: string;
	area: any;
	map: any;

	constructor(SitiosService: SitiosService, navParams: NavParams) {
		this.SitiosService = SitiosService;
		this.areaId = navParams.get('id');
		this.pictures = [];
		this.nombre = "";
		this.descripcion = "";
	}

	ionViewDidLoad(){
		this.SitiosService.get(this.areaId).subscribe(
			area => {
				console.log(area);
				this.nombre = area.nombre;
				this.descripcion = area.descripcion;
				this.loadMap(area.nombre, area.ubicacion_maps);
			}
		)
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