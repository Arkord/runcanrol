import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EventsService } from './events.service';
import * as moment from 'moment';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  private EventsService: EventsService;
  eventSource = [];
  viewTitle: string = "Eventos";
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  constructor(public navCtrl: NavController, EventsService: EventsService, private alertCtrl: AlertController) {
    this.EventsService = EventsService;
    this.EventsService.all().subscribe( response => this.eventSource = response )
  }

onEventSelected(event) {
  let start = moment(event.startTime).format('LLLL');
  let end = moment(event.endTime).format('LLLL');
    
  let alert = this.alertCtrl.create({
    title: '' + event.title,
    subTitle: 'From: ' + start + '<br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}

onViewTitleChanged(title) {
  this.viewTitle = title;
}

onTimeSelected(event) {

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
