import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Letvar } from './letvar';
import { LetvarService } from './letvars.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-letvars',
  templateUrl: './letvars.component.html',
  styleUrls: ['./letvars.component.css']
})
export class LetvarsComponent implements OnInit {
  letvars: Letvar[];
  selectedLetvar: Letvar;
  term$ = new Subject<string>();
  constructor(
    private letvarservice: LetvarService,
    private router: Router,
    private appservice: AppService) {
         this.letvarservice.searchLetvars(this.term$).subscribe(results => this.letvars = results);
     }

  getAllLetvars(): void {
    this.letvarservice
        .getAllLetvars()
        .then(letvars => this.letvars = letvars);
  }
searchLetvars(term$) {
  this.term$.subscribe(term => this.searchLetvars(term$));
}
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.letvarservice.create(name)
      .then(letvar => {
        this.letvars.push(letvar);
        this.selectedLetvar = null;
      });
  }

  delete(letvar: Letvar): void {
    this.letvarservice
        .delete(letvar.Id)
        .then(() => {
          this.letvars = this.letvars.filter(h => h !== letvar);
          if (this.selectedLetvar === letvar) { this.selectedLetvar = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLetvars();
  }

  onSelect(letvar: Letvar): void {
    this.selectedLetvar = letvar;
  }
onDeSelect(): void {
    this.selectedLetvar = null;
  }
  gotoDetail(): void {
    this.router.navigate(['/letvar', this.selectedLetvar.Id]);
  }
}
