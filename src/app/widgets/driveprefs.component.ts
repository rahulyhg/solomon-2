import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driveprefs',
  templateUrl: './driveprefs.component.html',
  styleUrls: ['./driveprefs.component.css']
})
export class DriveprefsComponent implements OnInit {
@Input() driveprefs;
  constructor() { }

  ngOnInit() {
  }

}
