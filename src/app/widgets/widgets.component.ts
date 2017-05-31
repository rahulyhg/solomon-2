import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'row-meta',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
@Input() rowmetadata;
admin = false;
  constructor(
    public appservice: AppService) { }

  ngOnInit() {
  }

}
