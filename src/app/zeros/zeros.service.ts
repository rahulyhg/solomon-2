import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Zero } from './zero';

@Injectable()
export class ZeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private zerosUrl = 'https://solomonschariot.com/jsonfeed.php?domain=zeros';  // URL to web api

  constructor(private http: Http) { }

  getAllZeros(): Promise<Zero[]> {
    return this.http.get(this.zerosUrl)
               .toPromise()
               .then(response => response.json() as Zero[])
               .catch(this.handleError);
  }

searchZeros(term$:Observable<string>, debounceMS = 400){
  return term$.debounceTime(400)
  .distinctUntilChanged()
  .switchMap(term => this.rawSearch(term))
}

rawSearch(term:string){
  return this.http.get(`${this.zerosUrl}&search=${term}`)
  .map(response => response.json() as Zero[]);
}
  getZero(Id: number): Promise<Zero> {
    const url = `${this.zerosUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Zero)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.zerosUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Zero> {
    return this.http
      .post(this.zerosUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(zero: Zero): Promise<Zero> {
    const url = `${this.zerosUrl}/${zero.Id}`;
    return this.http
      .put(url, JSON.stringify(zero), {headers: this.headers})
      .toPromise()
      .then(() => zero)
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