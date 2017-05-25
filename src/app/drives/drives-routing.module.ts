import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrivesComponent } from './drives.component';
import { DriveComponent } from './drive.component';

const driveroutes: Routes = [
    { path: '', component: DrivesComponent},
    { path: ':id', component: DriveComponent}
   ];
@NgModule({
  imports: [ RouterModule.forChild(driveroutes) ],
  exports: [ RouterModule ]
})

export class DrivesRoutingModule {}
