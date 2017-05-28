import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log.component';
import { LogsComponent } from './logs.component';


const logsroutes: Routes = [
    { path: '', component: LogsComponent},
    { path: ':id', component: LogComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(logsroutes) ],
  exports: [ RouterModule ]
})

export class LogsRoutingModule {}
