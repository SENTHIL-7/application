import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { LazyModule } from 'src/app/lazy/lazy.module';

fdescribe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports:[
        MatDividerModule,
        LazyModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call updateSearch', () => {
    component.updateSearch(<any>{target:<any>{value:''}})
    expect(component.updateSearch).toBeDefined();
  });
});
