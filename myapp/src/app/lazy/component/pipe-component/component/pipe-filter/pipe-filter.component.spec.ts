import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeFilterComponent } from './pipe-filter.component';

fdescribe('PipeFilterComponent', () => {
  let component: PipeFilterComponent;
  let fixture: ComponentFixture<PipeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should filter pipe', () => {
    component.userName='senthil'
    expect(component).toBeTruthy();
  });
});
