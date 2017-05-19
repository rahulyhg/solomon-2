import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Output } from './output';

@Injectable()
export class OutputService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private outputsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=outputs';  // URL to web api

  constructor(private http: Http) { }

  getAllOutputs(): Promise<Output[]> {
    return this.http.get(this.outputsUrl)
               .toPromise()
               .then(response => response.json() as Output[])
               .catch(this.handleError);
  }

getOutputPid(Pid: number): Promise<Output[]> {
    const url = `${this.outputsUrl}&search=${Pid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Output[])
      .catch(this.handleError);
  }
 searchOutputs(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.outputsUrl}&search=${term}`)
      .map(response => response.json() as Output[]);
  }

  getOutput(Id: number): Promise<Output> {
    const url = `${this.outputsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Output)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.outputsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Output> {
    return this.http
      .post(this.outputsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(output: Output): Promise<Output> {
    const url = `${this.outputsUrl}/${output.Id}`;
    return this.http
      .put(url, JSON.stringify(output), {headers: this.headers})
      .toPromise()
      .then(() => output)
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