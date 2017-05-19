import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ZerosComponent } from './zeros.component';
import { ZeroService } from './zeros.service';
import { ZerosRoutingModule } from "./zeros-routing.module";
import { ZeroComponent } from './zero.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZerosRoutingModule,
    NgModule
  ],
  declarations: [ZerosComponent, ZeroComponent],
  providers:[ZeroService]
})
export class ZerosModule { }
