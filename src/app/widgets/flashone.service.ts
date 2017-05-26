import { Injectable } from '@angular/core';

@Injectable()
export class FlashoneService {
flash = false;
  constructor() {
     setInterval(() => {
    this.flash = !this.flash; }, 2000);
   }

}
