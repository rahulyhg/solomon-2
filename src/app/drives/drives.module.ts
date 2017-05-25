import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DriveComponent } from './drive.component';
import { DrivesComponent } from './drives.component';
import { DrivesRoutingModule } from './drives-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
       CommonModule,
        FormsModule,
        DrivesRoutingModule,
        MaterialModule,
        WidgetsModule
  ],
       declarations: [DrivesComponent, DriveComponent],
       providers: []

})
export class DrivesModule { }
