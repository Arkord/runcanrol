import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AreasService } from '../areas.service';
import { AreaPage } from '../item/area.page';
import _ from 'lodash';

import { style } from './area-preview.style';

declare var google;

@Component({
	templateUrl: 'area-preview.html'
})
export class AreaPreviewPage {
	private nav: NavController;
	private AreasService: AreasService;
	private mapStyle = style;
	areaId: number;
	groupedPictures: any;
	pictures: any;

	@ViewChild('map') mapElement: ElementRef;
	nombre: string;
	descripcion: string;
	area: any;
	map: any;

	constructor(AreasService: AreasService, navParams: NavParams) {
		this.AreasService = AreasService;
		this.areaId = navParams.get('id');
		this.pictures = [];
		this.nombre = "";
		this.descripcion = "";
	}

	ionViewDidLoad(){
		this.AreasService.get(this.areaId).subscribe(
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