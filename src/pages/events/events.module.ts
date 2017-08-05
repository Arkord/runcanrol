import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import { EventsService } from './events.service'
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
    NgCalendarModule
  ],
  providers: [EventsService]
})
export class EventsPageModule {}
