import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';
import { LazyModule } from 'src/app/lazy/lazy.module';

fdescribe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortComponent ],
      imports:[
        LazyModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call oninit', () => {
    component.items=[
      { name: 'mani', age: 23 },
      { name: 'senthil', age: 21 },
      { name: 'surya', age: 20 },
      { name: 'vinoth', age: 22 },
      { name: 'richard', age: 19 }
    ]
  });
});
