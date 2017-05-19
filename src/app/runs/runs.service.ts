import { Injectable }    from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Run } from './run';

@Injectable()
export class RunService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private runsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=runs';  // URL to web api

  constructor(private http: Http) { }

  getAllRuns(): Promise<Run[]> {
    const url = `${this.runsUrl}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Run[])
               .catch(this.handleError);
  }
  searchRuns(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.runsUrl}&search=${term}`)
      .map(response => response.json() as Run[]);
  }
getRunPid(Pid: number): Promise<Run[]> {
    const url = `${this.runsUrl}&search=${Pid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Run[])
      .catch(this.handleError);
  }
  getRun(Id: number): Promise<Run> {
    const url = `${this.runsUrl}&Id=${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Run)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.runsUrl}&Id=${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Run> {
    return this.http
      .post(this.runsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(run: Run): Promise<Run> {
    const url = `${this.runsUrl}/${run.Id}`;
    return this.http
      .put(url, JSON.stringify(run), {headers: this.headers})
      .toPromise()
      .then(() => run)
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