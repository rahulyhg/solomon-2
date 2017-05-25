import { Injectable } from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';

@Injectable()
export class AppService {
admin: boolean;
private headers = new Headers({'Content-Type': 'application/json'});
private tablesUrl = 'https://solomonschariot.com/jsonfeed.php?domain=system&search=tables';  // URL to web api


constructor(private http: Http) { }

  onAdmin(admin) {
    this.admin = !this.admin;
    return this.admin;
  }
  getAllTables(): Promise<[string]> {
      const url = `${this.tablesUrl}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
