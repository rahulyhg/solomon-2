import { Injectable }    from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Sched86 } from './sched86';

@Injectable()
export class Sched86Service {
  private headers = new Headers({'Content-Type': 'application/json'});
  private sched86sUrl = 'https://solomonschariot.com/jsonfeed.php?domain=sched86s';  // URL to web api

  constructor(private http: Http) { }

  getAllSched86s(): Promise<Sched86[]> {
    return this.http.get(this.sched86sUrl)
               .toPromise()
               .then(response => response.json() as Sched86[])
               .catch(this.handleError);
  }

searchSched86s(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.sched86sUrl}&search=${term}`)
      .map(response => response.json() as Sched86[]);
  }


  getSched86(Id: number): Promise<Sched86> {
    const url = `${this.sched86sUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Sched86)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.sched86sUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Sched86> {
    return this.http
      .post(this.sched86sUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(sched86: Sched86): Promise<Sched86> {
    const url = `${this.sched86sUrl}/${sched86.Id}`;
    return this.http
      .put(url, JSON.stringify(sched86), {headers: this.headers})
      .toPromise()
      .then(() => sched86)
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