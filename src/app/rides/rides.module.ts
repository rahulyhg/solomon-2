import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RidesComponent } from "./rides.component";
import { RideComponent } from './ride.component';
import { RidesRoutingModule }  from "./rides-routing.module";

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule }           from '../widgets/widgets.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [  
    CommonModule,
    FormsModule,
    RidesRoutingModule ,
    MaterialModule,
    WidgetsModule,
    AgmCoreModule
  ],
  declarations: [RidesComponent, RideComponent],
  providers:[]
})
export class RidesModule { }
