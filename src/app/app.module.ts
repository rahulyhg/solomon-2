import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import {ServicesModule} from './services/services.module';
import { WidgetsModule } from './widgets/widgets.module';

import { PlaceService } from './places/places.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserGridComponent } from './usergrid/usergrid.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    WidgetsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServicesModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkNUplKQEHpgeBuc4KYEAwg1wR1Ec_yEs'
    })
  ],
  providers: [AppService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
