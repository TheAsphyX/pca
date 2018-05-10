import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Anagrafica } from '../app/model/anagrafica.model';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

const API_URL = environment.backendUrl;

@Injectable()
export class CfCheckService {

  constructor(private http: Http) { }

  public checkCf(): Observable<Anagrafica> {
    return this.http.get(API_URL)
       .map(this.extractData)
       .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
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
