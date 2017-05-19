import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Ride } from './ride';

@Injectable()
export class RideService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private ridesUrl = 'https://solomonschariot.com/jsonfeed.php?domain=rides';  // URL to web api

  constructor(private http: Http) { }

  getAllRides(): Promise<Ride[]> {
    return this.http.get(this.ridesUrl)
               .toPromise()
               .then(response => response.json() as Ride[])
               .catch(this.handleError);
  }
  getRidePid(Pid: number): Promise<Ride[]> {
    const url = `${this.ridesUrl}&search=${Pid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Ride[])
      .catch(this.handleError);
  }
searchRides(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.ridesUrl}&search=${term}`)
      .map(response => response.json() as Ride[]);
  }

  getRide(Id: number): Promise<Ride> {
    const url = `${this.ridesUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Ride)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.ridesUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Ride> {
    return this.http
      .post(this.ridesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(ride: Ride): Promise<Ride> {
    const url = `${this.ridesUrl}/${ride.Id}`;
    return this.http
      .put(url, JSON.stringify(ride), {headers: this.headers})
      .toPromise()
      .then(() => ride)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/