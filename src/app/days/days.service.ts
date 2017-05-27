import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Day } from './day';

@Injectable()
export class DayService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private daysUrl = 'https://solomonschariot.com/jsonfeed.php?domain=days';  // URL to web api

  constructor(private http: Http) { }

  getAllDays(): Promise<Day[]> {
    return this.http.get(this.daysUrl)
               .toPromise()
               .then(response => response.json() as Day[])
               .catch(this.handleError);
  }

searchDays(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term));
  }
  rawSearch(term: string) {
    return  this.http.get(`${this.daysUrl}&search=${term}`)
      .map(response => response.json() as Day[]);
  }
  getDay(Id: number): Promise<Day> {
    const url = `${this.daysUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Day)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.daysUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Day> {
    return this.http
      .post(this.daysUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(day: Day): Promise<Day> {
    const url = `${this.daysUrl}/${day.Id}`;
    return this.http
      .put(url, JSON.stringify(day), {headers: this.headers})
      .toPromise()
      .then(() => day)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

