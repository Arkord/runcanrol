import { Component,  ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EventsService } from './events.service';
import * as moment from 'moment';

import { style } from './events.style';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
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

  constructor(public navCtrl: NavController, EventsService: EventsService, private alertCtrl: AlertController) {
    this.EventsService = EventsService;
    this.EventsService.all().subscribe( response => this.eventSource = response )
  }

onEventSelected(event) {
  moment.locale('es');
  let start = moment(event.startTime).format('DD-MM-YYYY HH:mm');
  let end = moment(event.endTime).format('DD-MM-YYYY HH:mm');
    
  let alert = this.alertCtrl.create({
    title: `<h2>${event.title}</h2>`,
    subTitle: `
      <p>De: ${start}</p>
      <p id=2>A: ${end}</p>
      <p class="nigga" id="s">${event.description}</p>
      <div id="map"></div>
      `,
    buttons: ['OK']
  });
  alert.present();
  //this.loadMap(event.title, event.location);
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
