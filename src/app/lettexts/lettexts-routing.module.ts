import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LettextsComponent } from './lettexts.component';


const lettextsroutes: Routes = [
     { path: '', component: LettextsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(lettextsroutes) ],
  exports: [ RouterModule ]
})

export class LettextsRoutingModule {}
