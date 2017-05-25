import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Ride } from './ride';
import { RideService }         from './rides.service';
import { AppService }          from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
  rides: Ride[];
  selectedRide: Ride;
  term$ = new Subject<string>();
  NW;
  SE;
  constructor(
    private rideservice: RideService,
    private router: Router,
    private appservice: AppService) {
        this.rideservice.searchRides(this.term$).subscribe(results => this.rides = results);
    }
  getAllRides(): void {
    this.rideservice
        .getAllRides()
        .then(rides => this.rides = rides);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.rideservice.create(name)
      .then(ride => {
        this.rides.push(ride);
        this.selectedRide = null;
      });
  }

  delete(ride: Ride): void {
    this.rideservice
        .delete(ride.Id)
        .then(() => {
          this.rides = this.rides.filter(h => h !== ride);
          if (this.selectedRide === ride) { this.selectedRide = null; }
        });
  }

  ngOnInit(): void {
    this.getAllRides();
  }

  onSelect(ride: Ride): void {
    this.selectedRide = ride;
    this.NW = {lat:40.677778, lng:-112.047222}
    this.SE = {lat:46.677778, lng:-106.5006904};
  }
  onDeSelect(): void {
    this.selectedRide = null;
  }
  gotoDetail(): void {
    this.router.navigate(['/ride', this.selectedRide.Id]);
  }
}
