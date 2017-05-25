import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Place } from './place';

@Injectable()
export class PlaceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private placesUrl = 'https://solomonschariot.com/jsonfeed.php?domain=places';  // URL to web api

  constructor(private http: Http) { }

getAllPlaces(): Promise<Place[]> {
    const url = `${this.placesUrl}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Place[])
               .catch(this.handleError);
  }
searchPlaces(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term));
  }
  rawSearch(term: string) {
    return  this.http.get(`${this.placesUrl}&search=${term}`)
      .map(response => response.json() as Place[]);
  }
getPlacePid(Pid: number): Promise<Place[]> {
    const url = `${this.placesUrl}&search=${Pid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Place[])
      .catch(this.handleError);
  }
  getPlace(Id: number): Promise<Place> {
    const url = `${this.placesUrl}&Id=${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(data => data.json() as Place)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.placesUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Place> {
    return this.http
      .post(this.placesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(place: Place): Promise<Place> {
    const url = `${this.placesUrl}/${place.Id}`;
    return this.http
      .put(url, JSON.stringify(place), {headers: this.headers})
      .toPromise()
      .then(() => place)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
