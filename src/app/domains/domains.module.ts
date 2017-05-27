import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DomainComponent } from './domain.component';
import { DomainsComponent } from './domains.component';
import { DomainsRoutingModule } from './domains-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DomainsRoutingModule,
    MaterialModule,
    WidgetsModule
    ],
  declarations: [DomainsComponent, DomainComponent],
  providers: []

})
export class DomainsModule { }
