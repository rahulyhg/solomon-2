import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZeroComponent } from './zero.component';
import { ZerosComponent } from './zeros.component';
import { ZerosRoutingModule } from './zeros-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZerosRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [ZerosComponent, ZeroComponent],
  providers: []
})
export class ZerosModule { }
