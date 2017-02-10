import { Component, OnInit } from '@angular/core';
import {MapService} from './shared/map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 43.786126;
  lng: number = -79.291554;

  constructor(private ms: MapService) { }

  ngOnInit() {
    this.ms.getLocations().subscribe( (res) => {
      console.log(res)
    });
  }

}
