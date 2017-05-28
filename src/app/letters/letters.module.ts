import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LetterComponent } from './letter.component';
import { LettersComponent } from './letters.component';
import { LettersRoutingModule } from './letters-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LettersRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
  declarations: [LettersComponent, LetterComponent],
  providers: []
})
export class LettersModule { }
