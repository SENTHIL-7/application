import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-tip',
  templateUrl: './page-tip.component.html',
  styleUrls: ['./page-tip.component.scss']
})

export class PageTipComponent implements OnInit {
 
  @Input() title!:string;
  @Input() description!:string;
  @Input() actionArray!:any[];
  @Output() actionEmit = new EventEmitter<string>();
  ngOnInit(): void {
    // console.log(this.title)
    // console.log(this.actionArray)
  }
  onActionEmit(event:any){
    this.actionEmit.emit(event);
  }
}
