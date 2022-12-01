import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../widget/widget.module';
import { LocationCardComponent, NavbarComponent } from './components';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [MainPageComponent, NavbarComponent, LocationCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    LeafletModule,
  ],
})
export class FeatureModule {}
