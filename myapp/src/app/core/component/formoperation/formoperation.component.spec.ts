import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormoperationComponent } from './formoperation.component';

describe('FormoperationComponent', () => {
  let component: FormoperationComponent;
  let fixture: ComponentFixture<FormoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormoperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
