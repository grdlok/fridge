import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment'
import { MapInterface } from './map.interface'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {

  url = environment.url

  constructor(private http: Http) { }

  getLocations () {
    let head = new Headers({"Access-Control-Request-Headers": "X-Requested-With, accept, content-type",
                            "Access-Control-Allow-Methods": "GET, POST"})
    let options = new RequestOptions({ headers: head });
    return this.http.get(this.url, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response): Observable<MapInterface[]> {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
