import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { FirebaseCrudService } from '../firebase-crud.service';
import { FirebaseItem } from '../models/firebase-item.model';
import { FirebaseCrudEditPage } from '../edit/firebase-crud.edit.page';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
	templateUrl: 'firebase-crud.list.html'
})
export class FirebaseCrudListPage implements OnInit {
	items: FirebaseListObservable<FirebaseItem[]>;

	constructor(private service: FirebaseCrudService, private modalController: ModalController) {
	}

	ngOnInit(): void {
		this.items = this.service.getItems();
	}

	addItem() {
		let modal = this.modalController.create(FirebaseCrudEditPage);
		modal.onDidDismiss(item => {
			if (!item) {
				return;
			}
			this.items.push(item);
		});
		modal.present(modal);
	}

	editItem(item) {
		let modal = this.modalController.create(FirebaseCrudEditPage, item);
		modal.onDidDismiss(changedItem => {
			if (!changedItem) {
				return;
			}
			this.items.update(item.$key, {
				title: changedItem.title,
				teaser: changedItem.teaser
			})
		});
		modal.present(modal);
	}

	deleteItem(item) {
		this.items.remove(item);
	}
}
