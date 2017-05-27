import { Injectable } from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Domain } from './domain';

@Injectable()
export class DomainService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private domainsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=domains';  // URL to web api

  constructor(private http: Http) { }

  getAllDomains(): Promise<Domain[]> {
    return this.http.get(this.domainsUrl)
               .toPromise()
               .then(response => response.json() as Domain[])
               .catch(this.handleError);
  }
searchDomains(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term));
  }
  rawSearch(term: string) {
    return  this.http.get(`${this.domainsUrl}&search=${term}`)
      .map(response => response.json() as Domain[]);
  }
  getDomain(Id: number): Promise<Domain> {
    const url = `${this.domainsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Domain)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.domainsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Domain> {
    return this.http
      .post(this.domainsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(domain: Domain): Promise<Domain> {
    const url = `${this.domainsUrl}/${domain.Id}`;
    return this.http
      .put(url, JSON.stringify(domain), {headers: this.headers})
      .toPromise()
      .then(() => domain)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

