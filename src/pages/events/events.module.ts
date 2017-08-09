import { NgModule, LOCALE_ID } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { EventsPreviewPage } from './preview/events-preview.page';
import { EventsPage } from './events.page';
import { EventsService } from './events.service'
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    EventsPage,
    EventsPreviewPage
  ],
  entryComponents: [
		EventsPage,
		EventsPreviewPage
	],
  imports: [
    IonicModule,
    NgCalendarModule
  ],
  providers: [
    EventsService,
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ]
})
export class EventsModule {

}
