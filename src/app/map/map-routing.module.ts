import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent }    from './map.component';
import { MapService } from './shared/map.service'

const MapRoutes: Routes = [
  { path: 'map',  component: MapComponent }
];
@NgModule({
  imports: [
  RouterModule.forChild(MapRoutes)
  ],
  exports: [
     RouterModule
  ],
  providers: [
    MapService
  ]
})
export class MapRoutingModule { }