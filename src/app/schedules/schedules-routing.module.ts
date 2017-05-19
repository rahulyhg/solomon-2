import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesComponent } from "./schedules.component";


const schedulesroutes: Routes = [
     { path:'', component: SchedulesComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(schedulesroutes) ],
  exports: [ RouterModule ]
})

export class SchedulesRoutingModule {}