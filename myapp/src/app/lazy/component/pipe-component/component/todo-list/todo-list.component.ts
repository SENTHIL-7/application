import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent  implements OnInit{
  results!: any[];
  searchTerm !: string;
  ngOnInit(){
    this.results = [
      {
        "id": "1",
        "summary": "These are the results for the searched text",
      },
      {
        "id": "2",
        "summary": "Here are some more results you searched for",
      },
      {
        "id": "2",
        "summary": "Searching for answers, are we?",
      },
      {
        "id": "2",
        "summary": "What more could you ask for?",
      }
    ]
  }
  updateSearch(e: any) {
    this.searchTerm = e.target.value
  }
}
