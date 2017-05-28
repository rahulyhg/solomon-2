import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LettersComponent } from './letters.component';
import { LetterComponent } from './letter.component';

const lettersroutes: Routes = [
     { path: '', component: LettersComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(lettersroutes) ],
  exports: [ RouterModule ]
})

export class LettersRoutingModule {}
