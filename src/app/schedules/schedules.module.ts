import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SchedulesComponent } from './schedules.component';
import { ScheduleService } from './schedules.service';
import { SchedulesRoutingModule } from "./schedules-routing.module";
import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SchedulesRoutingModule 
  ],
  declarations: [SchedulesComponent, ScheduleComponent],
  providers:[ScheduleService]
})
export class SchedulesModule { }
