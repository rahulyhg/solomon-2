import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserGridComponent } from './usergrid.component';
import { UserGridRoutingModule }  from "./usergrid-routing.module";

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { WidgetsModule }           from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule, 
    WidgetsModule,
    UserGridRoutingModule
  ],
  declarations: [    UserGridComponent],
  providers:[]
})
export class UserGridModule { }
