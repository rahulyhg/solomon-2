
import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Event }        from './event';
import { EventService } from './events.service';
import { AppService }           from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';



@Component({
  moduleId: module.id,
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event: Event;
  selectedEvent: Event;


  constructor(
    private eventservice: EventService,
    private router:Router,
    private route: ActivatedRoute
  
  ) {
  }

  ngOnInit(): void {
    // this.Id$.subscribe(Id =>this.searchEvent(Id$));
   
  // this.eventservice.searchEvent(this.Id$).subscribe(results => console.log(results[0]));
  }

  save(): void {
   /* this.eventservice.update(this.event)
      .then(() => this.goBack());*/
  }

goBack(){

}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/