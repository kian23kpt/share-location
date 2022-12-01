import { Component, Input, OnInit } from '@angular/core';
import { tileLayer, latLng, marker } from 'leaflet';
import { Location } from 'src/app/core/models';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnInit {
  @Input() data!: Location.Model;
  type = Location.Type;
  marker = marker(latLng(this.data?.latLng));

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&amp;copy; OpenStreetMap contributors',
      }),
      this.marker,
    ],
    zoom: 14,
    center: latLng(this.data.latLng),
  };

  constructor() {}

  ngOnInit(): void {}
}
