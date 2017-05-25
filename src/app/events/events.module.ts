import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventComponent } from './event.component';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      EventsRoutingModule,
      MaterialModule,
      WidgetsModule
  ],
      declarations: [EventsComponent, EventComponent],
      providers: []

})
export class EventsModule { }
