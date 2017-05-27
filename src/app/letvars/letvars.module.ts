import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LetvarComponent } from './letvar.component';
import { LetvarsComponent } from './letvars.component';
import { LetvarsRoutingModule } from './letvars-routing.module';


import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      LetvarsRoutingModule,
      MaterialModule,
      WidgetsModule
  ],
  declarations: [LetvarsComponent, LetvarComponent],
  providers: []
})
export class LetvarsModule { }
