import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[my-button]',
})
export class MyButtonDirective implements OnInit {
  btn!: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'my-custom-class');
    this.btn = '.my-custom-class'
  }
  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent')
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px')
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none')
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '14px')
    this.renderer.setStyle(this.el.nativeElement, 'letter-spacing', '1.5px')
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '600')

  }

  @HostListener('mouseenter') onmouseenter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'buttonface')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent')

  }
  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#dddddd')
    this.renderer.setStyle(this.el.nativeElement, 'transition', '.5s ')
    setTimeout(() => {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }, 500)
  }
}
