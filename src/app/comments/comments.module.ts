import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from "./comments-routing.module";
import { CommentDetailComponent } from './comment.component';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {WidgetsModule }           from '../widgets/widgets.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommentsRoutingModule,
    MaterialModule,
    WidgetsModule
  ],
     declarations: [CommentsComponent, CommentDetailComponent],
     providers:[]

})
export  class CommentsModule { }




