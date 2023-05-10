import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MyFxLayoutAlign]'
})
export class MyFxLayoutAlignDirective implements OnInit {
  @Input() MyFxLayoutAlign!: string;
  justifyContent: string = ''
  alignItems: string = ''
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.MyFxLayoutAlign) {
      this.MyFxLayoutAlign = this.MyFxLayoutAlign.trim()
      let tem = this.MyFxLayoutAlign.split(" ")
      if (tem.length == 2) {
        this.justifyContent = tem[0]
        this.alignItems = tem[1]
      }
      else {
        this.justifyContent = tem[0]
        this.alignItems = tem[0]
      }
    }
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', this.justifyContent)
    this.renderer.setStyle(this.el.nativeElement, 'align-items', this.alignItems)

  }
}
