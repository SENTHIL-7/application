import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeFilterComponent } from './pipe-filter.component';
import { FilterPipe } from '../../pipe/filter.pipe';
import { LazyModule } from 'src/app/lazy/lazy.module';

describe('PipeFilterComponent', () => {
  let component: PipeFilterComponent;
  let fixture: ComponentFixture<PipeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeFilterComponent ],
      imports:[
        // FilterPipe,
        LazyModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call addUser', () => {
    component.addUser()
    component.userName='senthil'
    component.addUser()
    expect(component.addUser).toBeDefined();
  });
});
