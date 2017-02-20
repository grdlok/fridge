import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule, SebmGoogleMapMarker } from 'angular2-google-maps/core';
import { MapRoutingModule } from './map-routing.module';
import { environment } from '../../environments/environment';
import { JsonpModule } from "@angular/http"


@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
  ],
  declarations: [MapComponent],
  providers: []
})
export class MapModule { }
