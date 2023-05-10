import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTipComponent } from './page-tip.component';

describe('PageTipComponent', () => {
  let component: PageTipComponent;
  let fixture: ComponentFixture<PageTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
