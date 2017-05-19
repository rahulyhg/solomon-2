import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Place }                from './place';
import { PlaceService }         from './places.service';

import { Location }               from '@angular/common';
import { AppService }          from '../app.service';
import { WidgetsModule }           from '../widgets/widgets.module';

//import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
title: string = 'Place Title';
zoom: number = 8;
place: Place;
places:Place[];
Id: number;

  constructor(
    private appservice: AppService,
    private router: Router,
    private activeroute: ActivatedRoute,
    private location: Location, 
    private placeservice:PlaceService, 
  ) {
     // activeroute.params.map((p:any) => this.Id = parseInt(p.Id));
      console.log(activeroute);
   }

  ngOnInit(): void {
    this.activeroute.params
      .switchMap((params: Params) => this.placeservice.getPlace(+params['id']))
      .subscribe(object => this.place = object[0] as Place );
  }
  
  }//]