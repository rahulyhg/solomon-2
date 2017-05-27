import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Lettext } from './lettext';
import { LettextService } from './lettexts.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lettexts',
  templateUrl: './lettexts.component.html',
  styleUrls: ['./lettexts.component.css']
})
export class LettextsComponent implements OnInit {
  lettexts: Lettext[];
  selectedLettext: Lettext;
  term$ = new Subject<string>();
  constructor(
    private lettextservice: LettextService,
    private router: Router,
    private appservice: AppService) {
         this.lettextservice.searchLettexts(this.term$).subscribe(results => this.lettexts = results);
     }
  getAllLettexts(): void {
    this.lettextservice
        .getAllLettexts()
        .then(lettexts => this.lettexts = lettexts);
  }

  searchLettexts(term$) {
    this.term$.subscribe(term => this.searchLettexts(term$));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.lettextservice.create(name)
      .then(lettext => {
        this.lettexts.push(lettext);
        this.selectedLettext = null;
      });
  }

  delete(lettext: Lettext): void {
    this.lettextservice
        .delete(lettext.Id)
        .then(() => {
          this.lettexts = this.lettexts.filter(h => h !== lettext);
          if (this.selectedLettext === lettext) { this.selectedLettext = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLettexts();
  }

  onSelect(lettext: Lettext): void {
    this.selectedLettext = lettext;
  }
    onDeSelect(): void {
    this.selectedLettext = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/lettext', this.selectedLettext.Id]);
  }
}
