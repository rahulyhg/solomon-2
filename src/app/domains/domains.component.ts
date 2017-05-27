import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Domain } from './domain';
import { DomainService } from './domains.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  domains: Domain[];
  selectedDomain: Domain;
 term$ = new Subject<string>();
  constructor(
    private domainservice: DomainService,
    private router: Router,
    private appservice: AppService) {
            this.domainservice.searchDomains(this.term$).subscribe(results => this.domains = results);

     }
searchDomains(term$) {
    this.term$.subscribe(term => this.searchDomains(term$));
      }
  getAllDomains(): void {
    this.domainservice
        .getAllDomains()
        .then(domains => this.domains = domains);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.domainservice.create(name)
      .then(domain => {
        this.domains.push(domain);
        this.selectedDomain = null;
      });
  }

  delete(domain: Domain): void {
    this.domainservice
        .delete(domain.Id)
        .then(() => {
          this.domains = this.domains.filter(h => h !== domain);
          if (this.selectedDomain === domain) { this.selectedDomain = null; }
        });
  }

  ngOnInit(): void {
    this.getAllDomains();
  }

  onSelect(domain: Domain): void {
    this.selectedDomain = domain;
  }

  onDeSelect(): void {
    this.selectedDomain = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/domain', this.selectedDomain.Id]);
  }
}
