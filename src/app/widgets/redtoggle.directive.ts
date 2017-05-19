import { Directive, HostBinding } from '@angular/core';
import { FlashoneService } from './flashone.service';

@Directive({
  selector: '[redtoggle]',
    providers: [FlashoneService]
})
export class RedtoggleDirective {
  @HostBinding('class.redhot') get redhot(){
      return this.flashoneservice.flash;
  }

  constructor(
    private flashoneservice: FlashoneService
  ) {
   
   }

}
