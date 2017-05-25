import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Output } from './output';
import { OutputService }         from './outputs.service';
import { AppService }            from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'


@Component({
  moduleId: module.id,
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {
  outputs: Output[];
  selectedOutput: Output;
  term$ = new Subject<string>();
  constructor(
    private appservice: AppService, 
    private outputservice: OutputService,
    private router: Router) { 
      this.outputservice.searchOutputs(this.term$).subscribe(results => this.outputs = results);
    }
searchOutputs(term$){
  this.term$.subscribe((term => this.searchOutputs(term$)));
}
  
  getAllOutputs(): void {
    this.outputservice
        .getAllOutputs()
        .then(outputs => this.outputs = outputs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.outputservice.create(name)
      .then(output => {
        this.outputs.push(output);
        this.selectedOutput = null;
      });
  }

  delete(output: Output): void {
    this.outputservice
        .delete(output.Id)
        .then(() => {
          this.outputs = this.outputs.filter(h => h !== output);
          if (this.selectedOutput === output) { this.selectedOutput = null; }
        });
  }

  ngOnInit(): void {
    this.getAllOutputs();
  }

  onSelect(output: Output): void {
    this.selectedOutput = output;
  }
   onDeSelect(): void {
    this.selectedOutput = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/output', this.selectedOutput.Id]);
  }
}
