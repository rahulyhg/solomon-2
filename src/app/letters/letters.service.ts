import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Letter } from './letter';

@Injectable()
export class LetterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private lettersUrl = 'https://solomonschariot.com/jsonfeed.php?domain=letters';  // URL to web api

  constructor(private http: Http) { }

  getAllLetters(): Promise<Letter[]> {
    return this.http.get(this.lettersUrl)
               .toPromise()
               .then(response => response.json() as Letter[])
               .catch(this.handleError);
  }
searchLetters(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term));
  }
  rawSearch(term: string) {
    return this.http.get(`${this.lettersUrl}&search=${term}`)
      .map(response => response.json() as Letter[]);
  }

  getLetter(Id: number): Promise<Letter> {
    const url = `${this.lettersUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Letter)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.lettersUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Letter> {
    return this.http
      .post(this.lettersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(letter: Letter): Promise<Letter> {
    const url = `${this.lettersUrl}/${letter.Id}`;
    return this.http
      .put(url, JSON.stringify(letter), {headers: this.headers})
      .toPromise()
      .then(() => letter)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

