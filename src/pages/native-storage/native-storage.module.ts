import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { NativeStorageEditPage } from './edit/native-storage.edit.page';
import { NativeStorageListPage } from './list/native-storage.list.page';
import { NativeStorage } from '@ionic-native/native-storage';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [
		NativeStorageEditPage,
		NativeStorageListPage
	],
	entryComponents: [
		NativeStorageEditPage,
		NativeStorageListPage
	],
	providers: [NativeStorage]
})
export class NativeStorageModule {

}