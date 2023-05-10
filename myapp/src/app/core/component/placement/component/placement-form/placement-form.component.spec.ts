import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementFormComponent } from './placement-form.component';

describe('PlacementFormComponent', () => {
  let component: PlacementFormComponent;
  let fixture: ComponentFixture<PlacementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
