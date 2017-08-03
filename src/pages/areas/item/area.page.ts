import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AreasService } from '../areas.service';

@Component({
	templateUrl: 'area.html'
})
export class AreaPage {
	private AreasService: AreasService;
	areaId: number;
	pictures: any;
	pictureIndex: any;
	mySlideOptions: any;

	constructor(AreasService: AreasService, navParams: NavParams) {
		this.AreasService = AreasService;
		this.areaId = navParams.get('areaId');
		this.pictureIndex = navParams.get('pictureIndex');
		this.mySlideOptions = {
			initialSlide: this.pictureIndex
		};
		this.AreasService.get(this.areaId).subscribe(
			area => this.pictures = area.pictures
		)
	}

}