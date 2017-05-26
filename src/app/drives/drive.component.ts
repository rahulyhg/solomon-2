import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Drive } from './drive';
import { DriveService } from './drives.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

  @Component({
  moduleId: module.id,
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {
  drive: Drive;
  selectedDrive: Drive;
  constructor(
    private driveservice: DriveService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
   ngOnInit(): void {

   }
}

