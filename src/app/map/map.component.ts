import { Component, OnInit } from '@angular/core';
import { MapService } from './shared/map.service';
import { MapInterface } from './shared/map.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 43.6532;
  lng: number = -79.3832;
  nodes: MapInterface[];

  constructor(private ms: MapService) { }

  ngOnInit() {
    this.ms.getLocations().subscribe((res) => { this.nodes = res});
  }
} 
