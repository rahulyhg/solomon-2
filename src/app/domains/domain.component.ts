import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Domain } from './domain';
import { DomainService } from './domains.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

  @Component({
  moduleId: module.id,
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  domain: Domain;
  selectedDomain: Domain;
  constructor(
    private domainservice: DomainService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
   ngOnInit(): void {

   }
}

