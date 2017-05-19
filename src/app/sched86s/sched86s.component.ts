import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Sched86 }                from './sched86';
import { Sched86Service }         from './sched86s.service';
import { AppService }             from '../app.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sched86s',
  templateUrl: './sched86s.component.html',
  styleUrls: ['./sched86s.component.css']
})
export class Sched86sComponent implements OnInit {
  sched86s: Sched86[];
  selectedSched86: Sched86;
  term$ = new Subject<string>();

  constructor(
    private sched86service: Sched86Service,
    private router: Router,
    private appservice: AppService) {
      this.sched86service.searchSched86s(this.term$).subscribe(results => this.sched86s = results)
     }

  searchSched86s(term$){
   this.term$.subscribe(term =>this.searchSched86s(term$));
    }
  

  getAllSched86s(): void {
    this.sched86service
        .getAllSched86s()
        .then(sched86s => this.sched86s = sched86s);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.sched86service.create(name)
      .then(sched86 => {
        this.sched86s.push(sched86);
        this.selectedSched86 = null;
      });
  }

  delete(sched86: Sched86): void {
    this.sched86service
        .delete(sched86.Id)
        .then(() => {
          this.sched86s = this.sched86s.filter(h => h !== sched86);
          if (this.selectedSched86 === sched86) { this.selectedSched86 = null; }
        });
  }

  ngOnInit(): void {
    this.getAllSched86s();
  }

  onSelect(sched86: Sched86): void {
    this.selectedSched86 = sched86;
  }
   onDeSelect(): void {
    this.selectedSched86 = null;
  }


  gotoDetail(): void {
    this.router.navigate(['/sched86', this.selectedSched86.Id]);
  }
}
