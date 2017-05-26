import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-geodata',
  templateUrl: './geodata.component.html',
  styleUrls: ['./geodata.component.css']
})
export class GeodataComponent implements OnInit {
@Input() geodata;
  constructor(private appservice: AppService) { }

  ngOnInit() {
  }

}
