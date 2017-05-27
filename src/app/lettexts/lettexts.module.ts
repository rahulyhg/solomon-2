import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LettextComponent } from './lettext.component';
import { LettextsComponent } from './lettexts.component';
import { LettextsRoutingModule } from './lettexts-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LettextsRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [LettextsComponent, LettextComponent],
  providers: []
})
export class LettextsModule { }
