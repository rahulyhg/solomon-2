import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Run }                from './run';
import { RunService }         from './runs.service';
import { AppService }         from '../app.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.css']
})
export class RunsComponent implements OnInit {
  runs: Run[];
  selectedRun: Run;
  term$ = new Subject<string>();

  constructor(
    private runservice: RunService,
    private router: Router,
    private appservice:AppService) {
      this.runservice.searchRuns(this.term$).subscribe(results =>this.runs = results);
     }

  searchRuns(term$){
   this.term$.subscribe(term =>this.searchRuns(term$));
    }
  
  getAllRuns(): void {
    this.runservice
        .getAllRuns()
        .then(runs => this.runs = runs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.runservice.create(name)
      .then(run => {
        this.runs.push(run);
        this.selectedRun = null;
      });
  }

  delete(run: Run): void {
    this.runservice
        .delete(run.Id)
        .then(() => {
          this.runs = this.runs.filter(h => h !== run);
          if (this.selectedRun === run) { this.selectedRun = null; }
        });
  }

  ngOnInit(): void {
    this.getAllRuns();
  }

  onSelect(run: Run): void {
    this.selectedRun = run;
  }
   onDeSelect(): void {
    this.selectedRun = null;
  }

  gotoDetail(): void {
    this.router.navigate(['run', this.selectedRun.Id]);
  }
}
