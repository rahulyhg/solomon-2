import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGridComponent } from './usergrid.component';

const usersroutes: Routes = [
      { path: '', redirectTo: 'usergrid', pathMatch: 'full' },
      { path: 'usergrid',  component: UserGridComponent },
      { path: ':id', component: UserGridComponent } ];


@NgModule({
  imports: [ RouterModule.forChild(usersroutes) ],
  exports: [ RouterModule ]
})

export class UserGridRoutingModule {}
