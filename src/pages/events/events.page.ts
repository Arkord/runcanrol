import { Component,  ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsService } from './events.service';
import { EventsPreviewPage } from './preview/events-preview.page';
import * as moment from 'moment';

import { style } from './events.style';

@Component({
  templateUrl: 'events.html'
})
export class EventsPage {
  private EventsService: EventsService;
  private _elementRef: ElementRef;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  private mapStyle = style;
  map: any;

  calendar = {
    label: 'Seleccione un día',
    mode: 'month',
    currentDate: this.selectedDay
  }

  constructor(public nav: NavController, EventsService: EventsService) {
    this.EventsService = EventsService;
    this.EventsService.all().subscribe( response => this.eventSource = response )
  }

onEventSelected(event) {
  moment.locale('es');
  let start = moment(event.startTime).format('DD MMMM YYYY, HH:mm a');
  let end = moment(event.endTime).format('DD MMMM YYYY, HH:mm a');

  console.log(event);

  this.nav.push(EventsPreviewPage, {
    title: event.title,
    description: event.description,
    location: event.location, 
    start: start,
    end: end,
    cost: event.costo,
    type: event.tipo
  });
    
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

  loadMap(nombre, ubicacion_maps) {
    let coords = ubicacion_maps.split(',');
    let latLng = new google.maps.LatLng(coords[0], coords[1]);
  
    let mapOptions = {
      center: latLng,
      zoom: 15,
      styles: this.mapStyle,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
   
    this.map = new google.maps.Map(this._elementRef.nativeElement.querySelector('#map'), mapOptions);

    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: nombre
    });

  }

}
