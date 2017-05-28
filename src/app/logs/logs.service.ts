import { Injectable } from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Log } from './log';

@Injectable()
export class LogService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private logsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=logs';  // URL to web api

  constructor(private http: Http) { }

  getAllLogs(): Promise<Log[]> {
    return this.http.get(this.logsUrl)
               .toPromise()
               .then(response => response.json() as Log[])
               .catch(this.handleError);
  }
searchLogs(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term));
  }
  rawSearch(term: string) {
    return  this.http.get(`${this.logsUrl}&search=${term}`)
      .map(response => response.json() as Log[]);
  }

  getLog(Id: number): Promise<Log> {
    const url = `${this.logsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Log)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.logsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Log> {
    return this.http
      .post(this.logsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(log: Log): Promise<Log> {
    const url = `${this.logsUrl}/${log.Id}`;
    return this.http
      .put(url, JSON.stringify(log), {headers: this.headers})
      .toPromise()
      .then(() => log)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

