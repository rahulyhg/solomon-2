import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LogComponent } from './log.component';
import { LogsComponent } from './logs.component';
import { LogsRoutingModule } from './logs-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LogsRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [LogsComponent, LogComponent],
  providers: []
})
export class LogsModule { }
