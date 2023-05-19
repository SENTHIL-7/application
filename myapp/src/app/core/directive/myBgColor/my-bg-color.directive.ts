import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyBgColor]'
})
export class MyBgColorDirective {
  @Input() appMyBgColor!: string
  constructor(private el: ElementRef) {
  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appMyBgColor
  }

}