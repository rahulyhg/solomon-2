import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './app.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayDate = new Date().toLocaleDateString();
  title = 'Clicking amber buttons demos progressive loading of Angular2 with material design (load speed change).';
  pages= [''];
  showbuttons = false;
  place = {Lat: '51.673858', Lng: '7.815982'};
  constructor(
      private appservice: AppService,
      private activatedroute: ActivatedRoute,
      private router: Router
    ) {}

getAllTables(): void {
    this.appservice
        .getAllTables()
        .then(pages => this.pages =  pages);
  }
onClickAdmin(admin) {
    admin = this.appservice.onAdmin(admin);
  }

onClick(showbuttons) {
return !showbuttons;
}
onChange(page: string) {
  const lowercasepage = page.toLowerCase();
  console.log(lowercasepage);
 this.router.navigate([lowercasepage]);
}
onEvent() {
 this.router.navigate(['events']);
}
onRide() {
 this.router.navigate(['rides']);
}
onDrive() {
 this.router.navigate(['drives']);
}
onRun() {
 this.router.navigate(['runs']);
}
onUser() {
 this.router.navigate(['users']);
}
ngOnInit(): void {
  this.getAllTables();
  this.router.navigate(['usergrid']);

  }
}
