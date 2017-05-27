import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetvarsComponent } from './letvars.component';


const letvarsroutes: Routes = [
     { path: '', component: LetvarsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(letvarsroutes) ],
  exports: [ RouterModule ]
})

export class LetvarsRoutingModule {}
