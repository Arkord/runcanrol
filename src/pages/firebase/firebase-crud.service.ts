import { Injectable } from '@angular/core';
import { FirebaseItem } from './models/firebase-item.model';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseCrudService {
	constructor(private db: AngularFireDatabase) {
	}

	public getItems(): FirebaseListObservable<FirebaseItem[]> {
		return this.db.list('items');
	}
}