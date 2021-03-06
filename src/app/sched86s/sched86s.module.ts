import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Sched86Component } from './sched86.component';
import { Sched86sComponent } from './sched86s.component';
import { Sched86sRoutingModule } from './sched86s-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Sched86sRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [Sched86sComponent, Sched86Component],
  providers: []
})
export class Sched86sModule { }
