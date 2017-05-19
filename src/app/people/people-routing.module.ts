import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from "./people.component";


const peopleroutes: Routes = [
     { path:'', component: PeopleComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(peopleroutes) ],
  exports: [ RouterModule ]
})

export class PeopleRoutingModule {}