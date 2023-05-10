import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './component/child1/child1.component';
import { Child2Component } from './component/child2/child2.component';
import { TodoListComponent } from './component/pipe-component/component/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pipe', pathMatch: 'full' },
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component },
  { path: 'pipe', component: TodoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
