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
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    label: 'Seleccione un día',
    mode: 'month',
    currentDate: this.selectedDay
  }

  constructor(public navCtrl: NavController, EventsService: EventsService, private alertCtrl: AlertController) {
    this.EventsService = EventsService;
    this.EventsService.all().subscribe( response => this.eventSource = response )
  }

onEventSelected(event) {
  moment.locale('es');
  let start = moment(event.startTime).format('LLLL');
  let end = moment(event.endTime).format('LLLL');
    
  let alert = this.alertCtrl.create({
    title: `<h2>${event.title}</h2>`,
    subTitle: 'From: ' + start + '<br>To: ' + end + '<h2>' + event.description + '</h2>',
    buttons: ['OK']
  });
  alert.present();
}


onViewTitleChanged(title) {
  this.viewTitle = title;
}

onTimeSelected(event) {
  this.selectedDay = event.selectedTime;
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
