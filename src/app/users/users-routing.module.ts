import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';

const usersroutes: Routes = [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users',  component: UsersComponent },
      { path: ':id', component: UserComponent } ];


@NgModule({
  imports: [ RouterModule.forChild(usersroutes) ],
  exports: [ RouterModule ]
})

export class UsersRoutingModule {}
