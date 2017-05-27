import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Lettext } from './lettext';

@Injectable()
export class LettextService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private lettextsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=lettexts';  // URL to web api

  constructor(private http: Http) { }

  getAllLettexts(): Promise<Lettext[]> {
    return this.http.get(this.lettextsUrl)
               .toPromise()
               .then(response => response.json() as Lettext[])
               .catch(this.handleError);
  }

searchLettexts(term$: Observable<string>, debounceMs = 400) {
  return term$.debounceTime(400)
  .distinctUntilChanged()
  .switchMap(term => this.rawsearch(term));
}
rawsearch(term: string) {
  return this.http.get(`${this.lettextsUrl}&search=${term}`)
  .map(response => response.json() as Lettext[]);
}
  getLettext(Id: number): Promise<Lettext> {
    const url = `${this.lettextsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Lettext)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.lettextsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Lettext> {
    return this.http
      .post(this.lettextsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(lettext: Lettext): Promise<Lettext> {
    const url = `${this.lettextsUrl}/${lettext.Id}`;
    return this.http
      .put(url, JSON.stringify(lettext), {headers: this.headers})
      .toPromise()
      .then(() => lettext)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

