import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector:'[appDropdown]'
})
export class Dropdowndirective{
  @HostBinding('class.open') isOpen=false;
  @HostListener('click') toggleOpen(): void{
    this.isOpen = !this.isOpen;
  }
}
