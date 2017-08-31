import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomeService } from './home.service';

@NgModule({
	imports: [IonicModule],
	declarations: [HomePage],
	entryComponents: [HomePage],
	providers: [HomeService]
})
export class HomeModule {

}