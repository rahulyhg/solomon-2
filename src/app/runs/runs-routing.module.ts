import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunComponent } from "./run.component";
import { RunsComponent } from "./runs.component";

const runsroutes: Routes = [
    { path:'', component: RunsComponent},
    { path:'run/:Id', component: RunComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(runsroutes) ],
  exports: [ RouterModule ]
})

export class RunsRoutingModule {}