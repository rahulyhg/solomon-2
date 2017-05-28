import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Log } from './log';
import { LogService } from './logs.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selectedLog: Log;
  term$ = new Subject<string>();
  constructor(
    private logservice: LogService,
    private router: Router,
    private appservice: AppService) {
         this.logservice.searchLogs(this.term$).subscribe(results => this.logs = results);
    }

searchLogs(term$) {
  this.term$.subscribe(term => this.searchLogs(term$));
}
  getAllLogs(): void {
    this.logservice
        .getAllLogs()
        .then(logs => this.logs = logs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.logservice.create(name)
      .then(log => {
        this.logs.push(log);
        this.selectedLog = null;
      });
  }

  delete(log: Log): void {
    this.logservice
        .delete(log.Id)
        .then(() => {
          this.logs = this.logs.filter(h => h !== log);
          if (this.selectedLog === log) { this.selectedLog = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLogs();
  }

  onSelect(log: Log): void {
    this.selectedLog = log;
  }
   onDeSelect(): void {
    this.selectedLog = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/log', this.selectedLog.Id]);
  }
}
