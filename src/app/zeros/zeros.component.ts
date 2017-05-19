import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Zero }                from './zero';
import { ZeroService }         from './zeros.service';
import { AppService }           from '../app.service';

import { Subject }              from 'rxjs/Subject';
import { Observable }           from 'rxjs/Observable';

@Component({
  selector: 'app-zeros',
  templateUrl: './zeros.component.html',
  styleUrls: ['./zeros.component.css']
})
export class ZerosComponent implements OnInit {
  zeros: Zero[];
  selectedZero: Zero;
  term$ = new Subject<string>();

  constructor(
    private zeroservice: ZeroService,
    private router: Router,
    private appservice: AppService) {
      this.zeroservice.searchZeros(this.term$).subscribe(results =>this.zeros = results);
     }

  
  getAllZeros(): void {
    this.zeroservice
        .getAllZeros()
        .then(zeros => this.zeros = zeros);
  }
searchZeros(term$){
 this.term$.subscribe(term => this.searchZeros(term$));
}
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.zeroservice.create(name)
      .then(zero => {
        this.zeros.push(zero);
        this.selectedZero = null;
      });
  }

  delete(zero: Zero): void {
    this.zeroservice
        .delete(zero.Id)
        .then(() => {
          this.zeros = this.zeros.filter(h => h !== zero);
          if (this.selectedZero === zero) { this.selectedZero = null; }
        });
  }

  ngOnInit(): void {
    this.getAllZeros();
  }

  onSelect(zero: Zero): void {
    this.selectedZero = zero;
  }
  onDeSelect(): void {
    this.selectedZero = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/zero', this.selectedZero.Id]);
  }
}
