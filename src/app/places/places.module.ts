import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PlaceComponent } from './place.component';
import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from "./places-routing.module";

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule }           from '../widgets/widgets.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlacesRoutingModule, 
    MaterialModule,
    WidgetsModule,
    AgmCoreModule
  ],
  declarations: [PlacesComponent, PlaceComponent], 
  providers:[]
})
export class PlacesModule { }
