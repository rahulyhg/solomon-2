import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Schedule } from './schedule';

@Injectable()
export class ScheduleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private schedulesUrl = 'https://solomonschariot.com/jsonfeed.php?domain=schedules';  // URL to web api

  constructor(private http: Http) { }

getAllSchedules(): Promise<Schedule[]> {
    return this.http.get(this.schedulesUrl)
               .toPromise()
               .then(response => response.json() as Schedule[])
               .catch(this.handleError);
  }

searchSchedules(term$ : Observable<string>, debounceMS = 400){
  return term$.debounceTime(400).distinctUntilChanged().switchMap(term => this.rawSearch(term))
}

rawSearch(term:string){
 return this.http.get(`${this.schedulesUrl}&search=${term}`).map(response =>response.json() as Schedule[]);
}
  
getSchedule(Id: number): Promise<Schedule> {
    const url = `${this.schedulesUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Schedule)
      .catch(this.handleError);
  }

delete(Id: number): Promise<void> {
    const url = `${this.schedulesUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Schedule> {
    return this.http
      .post(this.schedulesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(schedule: Schedule): Promise<Schedule> {
    const url = `${this.schedulesUrl}/${schedule.Id}`;
    return this.http
      .put(url, JSON.stringify(schedule), {headers: this.headers})
      .toPromise()
      .then(() => schedule)
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