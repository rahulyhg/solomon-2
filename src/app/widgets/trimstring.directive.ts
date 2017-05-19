import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[trim]'
})
export class TrimDirective {
  @HostBinding() get innerText(){
        return "yaba"
}
}
