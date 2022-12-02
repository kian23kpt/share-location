import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { tileLayer, latLng, marker, Marker } from 'leaflet';
import { Location } from 'src/app/core/models';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnChanges {
  @Input() data!: Location.Model;
  type = Location.Type;
  marker!: Marker<any>;
  options!: {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.marker = new Marker(latLng(this.data.latLng)).bindPopup(
      this.data.name
    );

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&amp;copy; OpenStreetMap contributors',
        }),
        this.marker,
      ],
      zoom: 14,
      center: latLng(this.data.latLng),
    };
  }
}
