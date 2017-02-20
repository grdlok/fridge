import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from './shared/map.service';
import { MapInterface } from './shared/map.interface';
import { SebmGoogleMapMarker } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 43.6532;
  lng: number = -79.3832;
  nodes: MapInterface[];
  selectedMarker: number;

  constructor(private ms: MapService) { }

  ngOnInit() {
    this.ms.getLocations().subscribe((res) => { this.nodes = res; 
                                                this.nodes.forEach((i) => i.open = false);});
  }

  clickedMarker(marker: number) {
    if (this.selectedMarker !== undefined) { 
      this.nodes[this.selectedMarker].open = false;
    }
    this.selectedMarker = marker;
    this.nodes[marker].open = true;
  }
} 
 