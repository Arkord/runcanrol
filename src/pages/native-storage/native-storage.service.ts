import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { uuid } from '../../services/uuid';
import { NativeStorageItem } from './models/native-storage-item.model';

@Injectable()
export class NativeStorageService {
	private key = 'native-storage-items-key';

	constructor(private nativeStorage: NativeStorage) {
	}

	public getItems(): Promise<NativeStorageItem[]> {
		return this.nativeStorage.getItem(this.key)
			.then(null, () => this.saveItems([]));
	}

	public addItem(item: NativeStorageItem): Promise<any> {
		item.id = uuid();
		return this.getItems().then(items => {
			console.log('Add items', items);
			items.push(item);
			return this.saveItems(items);
		});
	}

	public deleteItem(id: string): Promise<any> {
		return this.getItems().then(items => {
			items = items.filter(x => x.id !== id);
			return this.saveItems(items);
		});
	}

	public updateItem(item: NativeStorageItem): Promise<any> {
		return this.getItems().then(items => {
			let storedItem = <NativeStorageItem>items.find(x => x.id === item.id);
			storedItem.title = item.title;
			storedItem.teaser = item.teaser;
			return this.saveItems(items);
		});
	}

	private saveItems(items: NativeStorageItem[]): Promise<any> {
		return this.nativeStorage.setItem(this.key, items);
	}

}