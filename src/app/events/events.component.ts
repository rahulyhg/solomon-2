import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Event } from './event';
import { EventService } from './events.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events: Event[];
  selectedEvent: Event;
  term$ = new Subject<string>();

  constructor(
    private eventservice: EventService,
    private router: Router,
    private appservice: AppService) {
      this.eventservice.searchEvents(this.term$).subscribe(resultobos => this.events = resultobos);
    }

 searchEvents(term$) {
   this.term$.subscribe(term => this.searchEvents(term$));
 }
  getAllEvents(): void {
    this.eventservice
        .getAllEvents()
        .then(events => this.events = events);
  }
  addEvent(EventName: string): void {
    EventName = EventName.trim();

  }
  delete(event: Event): void {
    this.eventservice
        .delete(event.Id)
        .then(() => {
          this.events = this.events.filter(h => h !== event);
          if (this.selectedEvent === event) { this.selectedEvent = null; }
        });
  }
  ngOnInit(): void {
    this.getAllEvents();
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
    onDeSelect(): void {
    this.selectedEvent = null;
  }

  gotoDetail(): void {
    this.router.navigate(['event/', this.selectedEvent.Id]);
  }
}
