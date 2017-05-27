import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Letvar } from './letvar';

@Injectable()
export class LetvarService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private letvarsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=letvars';  // URL to web api

  constructor(private http: Http) { }

  getAllLetvars(): Promise<Letvar[]> {
    return this.http.get(this.letvarsUrl)
               .toPromise()
               .then(response => response.json() as Letvar[])
               .catch(this.handleError);
  }

searchLetvars(term$: Observable<string>, debounceMs = 400) {
  return term$.debounceTime(400)
  .distinctUntilChanged()
  .switchMap(term => this.rawsearch(term));
}
rawsearch(term: string) {
return this.http.get(`${this.letvarsUrl}&search=${term}`)
.map(response => response.json() as Letvar[]);
}
  getLetvar(Id: number): Promise<Letvar> {
    const url = `${this.letvarsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Letvar)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.letvarsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Letvar> {
    return this.http
      .post(this.letvarsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(letvar: Letvar): Promise<Letvar> {
    const url = `${this.letvarsUrl}/${letvar.Id}`;
    return this.http
      .put(url, JSON.stringify(letvar), {headers: this.headers})
      .toPromise()
      .then(() => letvar)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

