import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScheduleComponent } from './schedule.component';
import { SchedulesComponent } from './schedules.component';
import { SchedulesRoutingModule } from './schedules-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SchedulesRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [SchedulesComponent, ScheduleComponent],
  providers: []
})
export class SchedulesModule { }
