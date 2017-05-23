import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User }                from './usergrid';
import { UserGridService }         from './usergrid.service';
import { AppService }          from '../app.service';


import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import {WidgetsModule }           from '../widgets/widgets.module';

@Component({
  moduleId: module.id,
  selector: 'app-usergrid',
  templateUrl: './usergrid.component.html',
  styleUrls: ['./usergrid.component.css']
})
export class UserGridComponent implements OnInit {
  users: User[];
  selectedUser: User;
  term$ = new Subject<string>();
  metadata = false;

  constructor(
    private usergridservice: UserGridService,
    private router: Router,
    private activeroute: ActivatedRoute, 
    private appservice: AppService) {
      this.usergridservice.searchUsers(this.term$).subscribe(results =>this.users = results);
     }
     
  getAllUsers(): void {
    this.usergridservice
        .getAllUsers()
        .then(users => this.users = users);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.usergridservice.create(name)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  delete(user: User): void {
    this.usergridservice
        .delete(user.Id)
        .then(() => {
          this.users = this.users.filter(h => h !== user);
          if (this.selectedUser === user) { this.selectedUser = null; }
        });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
  onDeSelect(): void {
    this.selectedUser = null;
  }

  gotoDetail(user:User) {
    this.router.navigate(['users', user.Id]);
  }
  setmailprefs($event):void{
    console.log($event);
  }
}
