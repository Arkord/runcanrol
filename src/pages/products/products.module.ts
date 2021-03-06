import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

import { ProductsStoresPage } from './stores/products.stores.page';
import { StorePreviewPage } from './preview/store-preview.page';
import { ProductsListPage } from './list/products.list.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [
		IonicModule,
		PipesModule,
		CustomComponentsModule
	],
	declarations: [
		ProductsStoresPage,
		ProductsListPage,
		StorePreviewPage
	],
	entryComponents: [
		ProductsStoresPage,
		ProductsListPage,
		StorePreviewPage
	]
})
export class ProductsModule {

}