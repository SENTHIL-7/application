import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  items = [
    { name: 'mani', age: 23 },
    { name: 'senthil', age: 21 },
    { name: 'surya', age: 20 },
    { name: 'vinoth', age: 22 },
    { name: 'richard', age: 19 }
  ]
  ngOnInit() {

  }
}
