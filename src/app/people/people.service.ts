import { Injectable }    from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';

@Injectable()
export class PersonService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private peopleUrl = 'https://solomonschariot.com/jsonfeed.php?domain=people';  // URL to web api

  constructor(private http: Http) { }

  getAllPeople(): Promise<Person[]> {
    return this.http.get(this.peopleUrl)
               .toPromise()
               .then(response => response.json() as Person[])
               .catch(this.handleError);
  }

searchPeople(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.peopleUrl}&search=${term}`)
      .map(response => response.json() as Person[]);
  }

  getPerson(Id: number): Promise<Person> {
    const url = `${this.peopleUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Person)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.peopleUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Person> {
    return this.http
      .post(this.peopleUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(person: Person): Promise<Person> {
    const url = `${this.peopleUrl}/${person.Id}`;
    return this.http
      .put(url, JSON.stringify(person), {headers: this.headers})
      .toPromise()
      .then(() => person)
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