import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { Child1Component } from './component/child1/child1.component';
import { Child2Component } from './component/child2/child2.component';
import { MaterialModule } from '../material/material.module';
import { PipeFilterComponent } from './component/pipe-component/component/pipe-filter/pipe-filter.component';
import { SortComponent } from './component/pipe-component/component/sort/sort.component';
import { TodoListComponent } from './component/pipe-component/component/todo-list/todo-list.component';
// import { FilterPipe } from './component/pipe-component/pipe/filter.pipe';
// import { MySortPipe } from './component/pipe-component/pipe/my-sort.pipe';
// import { HighlightPipe } from './component/pipe-component/pipe/highlight.pipe';
// import { AppendPipe } from './component/pipe-component/pipe/append.pipe';


@NgModule({
  declarations: [
    LazyComponent,
    Child1Component,
    Child2Component,
    PipeFilterComponent,
    SortComponent,
    TodoListComponent,
    // FilterPipe,
    // MySortPipe,
    // HighlightPipe,
    // AppendPipe
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MaterialModule
  ]
})
export class LazyModule { }
