import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventComponent } from './event.component';

const eventroutes: Routes = [

    { path:'', 
    children: [
      {path: '', component: EventsComponent}, 
      { path: '/:id', component: EventComponent }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(eventroutes) ],
  exports: [ RouterModule ]
})

export class EventsRoutingModule {}