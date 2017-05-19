import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RidesComponent } from "./rides.component";


const ridesroutes: Routes = [
     { path:'', component: RidesComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(ridesroutes) ],
  exports: [ RouterModule ]
})

export class RidesRoutingModule {}