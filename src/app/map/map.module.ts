import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapRoutingModule } from './map-routing.module';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
  ],
  declarations: [MapComponent]
})
export class MapModule { }
