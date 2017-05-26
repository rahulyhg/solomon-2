import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import { GeodataComponent } from './geodata.component';
import { DriveprefsComponent } from './driveprefs.component';
import { FormsModule } from '@angular/forms';
import { TrimDirective } from './trimstring.directive';
import { RedtoggleDirective } from './redtoggle.directive';
import { RedflashDirective } from './redflash.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetsComponent, GeodataComponent, DriveprefsComponent, TrimDirective, RedtoggleDirective, RedflashDirective],
  exports: [WidgetsComponent, GeodataComponent, TrimDirective, RedtoggleDirective]

})
export class WidgetsModule { }
