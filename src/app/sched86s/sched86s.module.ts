import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { Sched86sComponent } from './sched86s.component';
import { Sched86Service } from './sched86s.service';
import { Sched86sRoutingModule } from "./sched86s-routing.module";
import { Sched86Component } from './sched86.component';



@NgModule({
  imports: [
      CommonModule,
    FormsModule,
    Sched86sRoutingModule 
  ],
  declarations: [Sched86sComponent, Sched86Component],
  providers:[Sched86Service]
})
export class Sched86sModule { }
