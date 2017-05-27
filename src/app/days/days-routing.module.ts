import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaysComponent } from './days.component';


const daysroutes: Routes = [
     { path: '', component: DaysComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(daysroutes) ],
  exports: [ RouterModule ]
})

export class DaysRoutingModule {}
