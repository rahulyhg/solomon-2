import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Day } from './day';
import { DayService } from './days.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'app-days',
    templateUrl: './days.component.html',
    styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  days: Day[];
  selectedDay: Day;
  term$ = new Subject<string>();

  constructor(
    private dayservice: DayService,
    private router: Router,
    public appservice: AppService) {
          this.dayservice.searchDays(this.term$).subscribe(results => this.days = results);
     }
  searchDays(term$) {
   this.term$.subscribe(term => this.searchDays(term$));
 }
  getAllDays(): void {
    this.dayservice
        .getAllDays()
        .then(days => this.days = days);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dayservice.create(name)
      .then(day => {
        this.days.push(day);
        this.selectedDay = null;
      });
  }

  delete(day: Day): void {
    this.dayservice
        .delete(day.Id)
        .then(() => {
          this.days = this.days.filter(h => h !== day);
          if (this.selectedDay === day) { this.selectedDay = null; }
        });
  }

  ngOnInit(): void {
    this.getAllDays();
  }

  onSelect(day: Day): void {
    this.selectedDay = day;
  }
  onDeSelect(): void {
    this.selectedDay = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/day', this.selectedDay.Id]);
  }
}
