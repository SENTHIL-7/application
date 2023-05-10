import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.scss']
})
export class PipeFilterComponent {
  userName!: string;
  users = [
    { name: 'senthil', gender: 'M' },
    { name: 'sathish', gender: 'M' },
    { name: 'shunmugam', gender: 'M' },
    { name: 'micheal', gender: 'M' },
    { name: 'vimala', gender: 'F' },
    { name: 'harini', gender: 'F' },
  ];
  addUser() {
    // this.users.push({ name: this.userName, gender: "M" })
    if (this.userName) {
      this.users = [...this.users, { name: this.userName, gender: "M" }]
    }
  }
}

