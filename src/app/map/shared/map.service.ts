import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { MapInterface } from './map.interface';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class MapService {

  url = '/api/opendata/ac_locations/locations.json?v1.00';


  constructor(private http: Http, private jsp: Jsonp) { }


  getLocations(): Observable<MapInterface[]> {

    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response): Observable<MapInterface[]> {
    let body = res.json();
    for (let item of body) {
      item.open = false;
    }
    return body || { };
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    return Observable.throw(errMsg);
  }

}
