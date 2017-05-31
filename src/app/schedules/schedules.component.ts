import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Schedule } from './schedule';
import { ScheduleService } from './schedules.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import {Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
})
export class SchedulesComponent implements OnInit {
  schedules: Schedule[];
  selectedSchedule: Schedule;
  term$ = new Subject<string>();

  constructor(
    private scheduleservice: ScheduleService,
    private router: Router,
    public appservice: AppService) {
       this.scheduleservice.searchSchedules(this.term$).subscribe(results => this.schedules = results);
    }

searchSchedules(term$) {
  this.term$.subscribe(term => this.searchSchedules(term$));
}

getAllSchedules(): void {
    this.scheduleservice
        .getAllSchedules()
        .then(schedules => this.schedules = schedules);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.scheduleservice.create(name)
      .then(schedule => {
        this.schedules.push(schedule);
        this.selectedSchedule = null;
      });
  }

  delete(schedule: Schedule): void {
    this.scheduleservice
        .delete(schedule.Id)
        .then(() => {
          this.schedules = this.schedules.filter(h => h !== schedule);
          if (this.selectedSchedule === schedule) { this.selectedSchedule = null; }
        });
  }

  ngOnInit(): void {
    this.getAllSchedules();
  }

  onSelect(schedule: Schedule): void {
    this.selectedSchedule = schedule;
  }
  onDeSelect(): void {
    this.selectedSchedule = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/schedule', this.selectedSchedule.Id]);
  }
}
