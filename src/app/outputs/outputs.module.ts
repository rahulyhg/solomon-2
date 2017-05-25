import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OutputComponent } from './output.component';
import { OutputsComponent } from './outputs.component';
import { OutputsRoutingModule } from './outputs-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OutputsRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [OutputsComponent, OutputComponent],
  providers: []
})
export class OutputsModule { }
