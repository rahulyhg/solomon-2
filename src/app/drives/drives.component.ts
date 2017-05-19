import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Drive }                from './drive';
import { DriveService }         from './drives.service';
import {AppService }            from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.css']
})
export class DrivesComponent implements OnInit {
  drives: Drive[];
  selectedDrive: Drive;
  term$ = new Subject<string>();
  NW;
  SE;


  constructor(
    private driveservice: DriveService,
    private router: Router,
    private appservice:AppService) {
      this.driveservice.searchDrives(this.term$).subscribe(results =>this.drives = results);
     }

  searchDrives(term$){
       this.term$.subscribe(term =>this.driveservice.searchDrives(term$)); //check driveservice
  }
  getAllDrives(): void {
    this.driveservice
        .getAllDrives()
        .then(drives => this.drives = drives);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.driveservice.create(name)
      .then(drive => {
        this.drives.push(drive);
        this.selectedDrive = null;
      });
  }

  delete(drive: Drive): void {
    this.driveservice
        .delete(drive.Id)
        .then(() => {
          this.drives = this.drives.filter(h => h !== drive);
          if (this.selectedDrive === drive) { this.selectedDrive = null; }
        });
  }

  ngOnInit(): void {
    this.getAllDrives();
  }

  onSelect(drive: Drive): void {
    this.selectedDrive = drive;
    this.NW = {lat:40.677778, lng:-112.047222};
    this.SE = {lat:46.677778, lng:-106.5006904};

  }
   onDeSelect(): void {
    this.selectedDrive = null;
  }
  gotoDetail(): void {
    this.router.navigate(['/drive', this.selectedDrive.Id]);
  }
}

