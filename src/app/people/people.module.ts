import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonComponent } from './person.component';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [PeopleComponent, PersonComponent ],
  providers: []
})
export class PeopleModule { }
