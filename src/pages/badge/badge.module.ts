import { NgModule } from '@angular/core';
import { Badge } from '@ionic-native/badge';
import { IonicModule } from 'ionic-angular';
import { BadgePage } from './badge.page';

@NgModule({
	imports: [IonicModule],
	declarations: [BadgePage],
	entryComponents: [BadgePage],
	providers: [Badge]
})
export class BadgeModule {

}