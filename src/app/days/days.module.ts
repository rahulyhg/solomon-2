import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DayComponent } from './day.component';
import { DaysComponent } from './days.component';
import { DaysRoutingModule } from './days-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DaysRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [DaysComponent, DayComponent],
  providers: []
})
export class DaysModule { }
