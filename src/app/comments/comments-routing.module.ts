import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from "./comments.component";


const commentsroutes: Routes = [
     { path:'', component: CommentsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(commentsroutes) ],
  exports: [ RouterModule ]
})

export class CommentsRoutingModule {}