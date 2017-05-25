import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from './person';
import { PersonService }         from './people.service';
import { AppService }            from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[];
  selectedPerson: Person;
 term$ = new Subject<string>();
  constructor(
    private personservice: PersonService,
    private router: Router,
    private appservice: AppService) { 
        this.personservice.searchPeople(this.term$).subscribe(results =>this.people = results);
    }

  searchPeople(term$){
   this.term$.subscribe(term =>this.searchPeople(term$));
    }
  getAllPeople(): void {
    this.personservice
        .getAllPeople()
        .then(people => this.people = people);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.personservice.create(name)
      .then(person => {
        this.people.push(person);
        this.selectedPerson = null;
      });
  }

  delete(person: Person): void {
    this.personservice
        .delete(person.Id)
        .then(() => {
          this.people = this.people.filter(h => h !== person);
          if (this.selectedPerson === person) { this.selectedPerson = null; }
        });
  }

  ngOnInit(): void {
    this.getAllPeople();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
   onDeSelect(): void {
    this.selectedPerson = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/person', this.selectedPerson.Id]);
  }
}
