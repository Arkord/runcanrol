import { NgModule, LOCALE_ID } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events.page';
import { EventsPreviewPage } from './preview/events-preview.page';
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
    IonicPageModule.forChild(EventsPage),
    NgCalendarModule
  ],
  providers: [
    EventsService,
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ]
})
export class EventsPageModule {}
