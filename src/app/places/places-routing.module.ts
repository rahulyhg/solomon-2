import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './place.component';
import { PlacesComponent } from './places.component';

const placesroutes: Routes = [
    { path: '', redirectTo: 'places', pathMatch: 'full' },
    { path: 'places', component: PlacesComponent },
    { path: ':id', component: PlaceComponent }
   ];


@NgModule({
  imports: [ RouterModule.forChild(placesroutes) ],
  exports: [ RouterModule ]
})

export class PlacesRoutingModule {}
