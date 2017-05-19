import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event } from './event';

@Injectable()
export class EventService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private eventsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=events';  // URL to web api

  constructor(private http: Http) {}

  getAllEvents(): Promise<Event[]> {
     const url = `${this.eventsUrl}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Event[])
               .catch(this.handleError);
  }

  searchEvents(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return this.http.get(`${this.eventsUrl}&search=${term}`)
      .map(response => response.json() as Event[]);
  }
  searchEvent(Id$: Observable<number>, debounceMs = 400) {
    return Id$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(Id => this.rawSearchById(Id))
  }
  rawSearchById(Id:number){
  console.log('this is here');
    return  this.http.get(`${this.eventsUrl}&Id=${Id}`)
      .map(response => response.json() as Event[]);
  }
  
  getEvent(Id: number): Promise<Event[]> {
    return this.http.get(`${this.eventsUrl}&Id=${Id}`)
      .toPromise()
      .then(response => response.json() as Event[])
      .catch(this.handleError);
  }

  
  delete(Id: number): Promise<void> {
    const url = `${this.eventsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Event> {
    return this.http
      .post(this.eventsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(event: Event): Promise<Event> {
    const url = `${this.eventsUrl}/${event.Id}`;
    return this.http
      .put(url, JSON.stringify(event), {headers: this.headers})
      .toPromise()
      .then(() => event)
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