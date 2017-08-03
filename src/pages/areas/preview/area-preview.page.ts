import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AreasService } from '../areas.service';
import { AreaPage } from '../item/area.page';
import _ from 'lodash';

@Component({
	templateUrl: 'area-preview.html'
})
export class AreaPreviewPage {
	private nav: NavController;
	private GalleriesService: AreasService;
	galleryId: number;
	groupedPictures: any;
	pictures: any;

	constructor(nav: NavController, GalleriesService: AreasService, navParams: NavParams) {
		this.GalleriesService = GalleriesService;
		this.galleryId = navParams.get('id');
		this.nav = nav;
		this.pictures = [];
		this.GalleriesService.get(this.galleryId).subscribe(
			gallery => {
				this.pictures = gallery.pictures;
				this.groupedPictures = _.chunk(gallery.pictures, 3);
			}
		)
	}

	navigateToFullGalleryView(picture) {
		let pictureIndex = _.indexOf(this.pictures, picture);
		this.nav.push(AreaPage, {
			galleryId: this.galleryId,
			pictureIndex: pictureIndex
		});
	}

}