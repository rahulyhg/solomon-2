import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutputsComponent } from "./outputs.component";
import { OutputComponent } from "./output.component";

const outputsroutes: Routes = [
     { path:'', component: OutputsComponent},
       { path:'output:/Id', component: OutputComponent}
   ];
   
@NgModule({
  imports: [ RouterModule.forChild(outputsroutes) ],
  exports: [ RouterModule ]
})

export class OutputsRoutingModule {}