import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sched86sComponent } from "./sched86s.component";


const sched86sroutes: Routes = [
     { path:'', component: Sched86sComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(sched86sroutes) ],
  exports: [ RouterModule ]
})

export class Sched86sRoutingModule {}