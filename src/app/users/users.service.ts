import { Injectable }    from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'https://solomonschariot.com/jsonfeed.php?domain=users';  // URL to web api

  constructor(private http: Http) { }

  getAllUsers(): Promise<User[]> {
      const url = `${this.usersUrl}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as User[])
               .catch(this.handleError);
  }
searchUsers(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.usersUrl}&search=${term}`)
      .map(response => response.json() as User[]);
  }

  getUser(Id: number): Promise<User> {
    const url = `${this.usersUrl}&Id=${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.usersUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.Id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
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