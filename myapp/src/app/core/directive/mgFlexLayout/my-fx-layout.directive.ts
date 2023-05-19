import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MyFxLayout]'
})
export class MyFxLayoutDirective implements OnInit {
  @Input() MyFxLayout!: string;
  direction = 'row';
  wrap = 'nowrap';
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
    if (this.MyFxLayout) {
      this.MyFxLayout = this.MyFxLayout.trim()
      let tem = this.MyFxLayout.split(" ")
      if (tem.length == 2) {
        this.direction = tem[0]
        this.wrap = tem[1]
      }
      else {
        this.direction = tem[0]
      }
    }
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex')
    this.renderer.setStyle(this.el.nativeElement, 'flex-direction', this.direction)
    this.renderer.setStyle(this.el.nativeElement, 'flex-wrap', this.wrap)
  }
}
