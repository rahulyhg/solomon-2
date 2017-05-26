import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'row-meta',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
@Input() rowmetadata;

  constructor(private appservice: AppService) { }

  ngOnInit() {
  }

}
