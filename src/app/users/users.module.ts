import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UsersComponent } from "./users.component";
import { UsersRoutingModule }  from "./users-routing.module";

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { WidgetsModule }           from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    MaterialModule, 
    WidgetsModule
  ],
  declarations: [UsersComponent, UserComponent],
  providers:[]
})
export class UsersModule { }
