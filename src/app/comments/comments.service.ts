import { Injectable }    from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from './comment';

@Injectable()
export class CommentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private commentsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=comments';  // URL to web api

  constructor(private http: Http) { }

  getAllComments(): Promise<Comment[]> {
    return this.http.get(this.commentsUrl)
               .toPromise()
               .then(response => response.json() as Comment[])
               .catch(this.handleError);
  }
searchComments(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.commentsUrl}&search=${term}`)
      .map(response => response.json() as Comment[]);
  }
getCommentPid(Pid: number): Promise<Comment[]> {
    const url = `${this.commentsUrl}&search=${Pid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Comment[])
      .catch(this.handleError);
  }
  getComment(id: number): Promise<Comment> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Comment)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Comment> {
    return this.http
      .post(this.commentsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(comment: Comment): Promise<Comment> {
    const url = `${this.commentsUrl}/${comment.Id}`;
    return this.http
      .put(url, JSON.stringify(comment), {headers: this.headers})
      .toPromise()
      .then(() => comment)
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