import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { tileLayer, latLng, marker, LeafletMouseEvent } from 'leaflet';
import { Observable } from 'rxjs';
import { LocationActions } from 'src/app/core/actions';
import { Location } from 'src/app/core/models';
import { LocationState } from 'src/app/core/states';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  @Select(LocationState.locations) locations$!: Observable<Location.Model[]>;

  locationTypes = Location.Type;
  defaultLatLng = { lat: 35.7219, lng: 51.3347 };
  marker = marker(latLng(this.defaultLatLng));
  selectedFile!: string;

  form = this._fb.group({
    name: [''],
    type: [''],
    latLng: [{}],
    logo: [''],
  });

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&amp;copy; OpenStreetMap contributors',
      }),
      this.marker,
    ],
    zoom: 14,
    center: latLng(this.defaultLatLng),
  };

  constructor(private _fb: FormBuilder, private _store: Store) {}

  types(): Array<any> {
    var keys = Object.keys(this.locationTypes);
    return keys.filter((k) => !isNaN(Number(k)));
  }

  mapClicked(event: LeafletMouseEvent) {
    this.marker.setLatLng(event.latlng);
    this.form.get('latLng')?.patchValue(event.latlng);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = event.target.result;
      this.form.get('logo')?.patchValue(this.selectedFile);
    });
    reader.readAsDataURL(file);
  }

  handleAddLocation() {
    this._store.dispatch(new LocationActions.AddLocation(this.form.value));
  }
}
