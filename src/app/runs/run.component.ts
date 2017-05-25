
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Run } from './run';
import { RunService } from './runs.service';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  run: Run;

  constructor(
    private runService: RunService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.runService.getRun(+params['Id']))
      .subscribe(run => this.run = run);
  }

  save(): void {
    this.runService.update(this.run)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
