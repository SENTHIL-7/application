import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTableComponent } from './placement-table.component';

describe('PlacementTableComponent', () => {
  let component: PlacementTableComponent;
  let fixture: ComponentFixture<PlacementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
