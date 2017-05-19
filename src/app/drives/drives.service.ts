import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Drive } from './drive';

@Injectable()
export class DriveService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private drivesUrl = 'https://solomonschariot.com/jsonfeed.php?domain=drives';  // URL to web api

  constructor(private http: Http) { }

  getAllDrives(): Promise<Drive[]> {
    return this.http.get(this.drivesUrl)
               .toPromise()
               .then(response => response.json() as Drive[])
               .catch(this.handleError);
  }
getDrivePid(Pid: number): Promise<Drive[]> {
    const url = `${this.drivesUrl}&search=${Pid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Drive[])
      .catch(this.handleError);
  }
searchDrives(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.drivesUrl}&search=${term}`)
      .map(response => response.json() as Drive[]);
  }


  getDrive(Id: number): Promise<Drive> {
    const url = `${this.drivesUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Drive)
      .catch(this.handleError);
  }
  

  delete(Id: number): Promise<void> {
    const url = `${this.drivesUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Drive> {
    return this.http
      .post(this.drivesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(drive: Drive): Promise<Drive> {
    const url = `${this.drivesUrl}/${drive.Id}`;
    return this.http
      .put(url, JSON.stringify(drive), {headers: this.headers})
      .toPromise()
      .then(() => drive)
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