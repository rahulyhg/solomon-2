import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { RunComponent } from './run.component';
import { RunsComponent } from './runs.component';
import { RunsRoutingModule } from "./runs-routing.module";

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule }           from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RunsRoutingModule,
    MaterialModule, 
    WidgetsModule
  ],
  declarations: [RunsComponent, RunComponent],
  providers:[]
})
export class RunsModule { }
