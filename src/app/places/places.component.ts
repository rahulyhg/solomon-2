import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Place } from './place';
import { PlaceService } from './places.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import {WidgetsModule } from '../widgets/widgets.module';

// import { AgmCoreModule } from 'angular2-google-maps/core';


@Component({
  moduleId: module.id,
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  columns1 = ['Id', 'DFC', 'DLC'];
  title = 'AngMaps';
  Lat = 51.678418;
  Lng = 7.809007;

  places: Place[];
  selectedPlace: Place;
  term$ = new Subject<string>();

  constructor(
    private placeservice: PlaceService,
    private router: Router,
    private activeroute: ActivatedRoute,
    private appservice: AppService) {
      this.placeservice.searchPlaces(this.term$).subscribe(results => this.places = results);
    }
searchPlaces(term$) {
    this.term$.subscribe(term => this.searchPlaces(term$));
}
getAllPlaces(): void {
    this.placeservice
        .getAllPlaces()
        .then(places => this.places = places);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.placeservice.create(name)
      .then(place => {
        this.places.push(place);
        this.selectedPlace = null;
      });
  }
  delete(place: Place): void {
    this.placeservice
        .delete(place.Id)
        .then(() => {
          this.places = this.places.filter(h => h !== place);
          if (this.selectedPlace === place) { this.selectedPlace = null; }
        });
  }
  ngOnInit(): void {
    this.getAllPlaces();
  }
  onSelect(place: Place): void {
    this.selectedPlace = place;
  }
  onDeSelect(): void{
    this.selectedPlace = null;
  }
  gotoDetail(place:Place): void {
    this.router.navigate(['places', place.Id]);
    
  }
}
