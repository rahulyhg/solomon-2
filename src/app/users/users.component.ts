import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User }                from './user';
import { UserService }         from './users.service';
import { AppService }          from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import {WidgetsModule }           from '../widgets/widgets.module';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  term$ = new Subject<string>();

  constructor(
    private userservice: UserService,
    private router: Router,
    private activeroute: ActivatedRoute, 
    private appservice: AppService) {
      this.userservice.searchUsers(this.term$).subscribe(results =>this.users = results);
     }
     
  getAllUsers(): void {
    this.userservice
        .getAllUsers()
        .then(users => this.users = users);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userservice.create(name)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  delete(user: User): void {
    this.userservice
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
