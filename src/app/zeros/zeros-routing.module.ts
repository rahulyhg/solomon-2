import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZerosComponent } from "./zeros.component";


const zerosroutes: Routes = [
     { path:'', component: ZerosComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(zerosroutes) ],
  exports: [ RouterModule ]
})

export class ZerosRoutingModule {}