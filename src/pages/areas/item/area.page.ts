import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AreasService } from '../areas.service';

@Component({
	templateUrl: 'gallery.html'
})
export class AreaPage {
	private AreasService: AreasService;
	areaId: number;
	pictures: any;
	pictureIndex: any;
	mySlideOptions: any;

	constructor(GalleriesService: AreasService, navParams: NavParams) {
		this.AreasService = GalleriesService;
		this.areaId = navParams.get('areaId');
		this.pictureIndex = navParams.get('pictureIndex');
		this.mySlideOptions = {
			initialSlide: this.pictureIndex
		};
		this.AreasService.get(this.areaId).subscribe(
			gallery => this.pictures = gallery.pictures
		)
	}

}