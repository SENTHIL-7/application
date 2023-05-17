import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTipComponent } from './page-tip.component';

fdescribe('PageTipComponent', () => {
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
  it('should call onActionEmit()', () => {
    component.onActionEmit(<any>{target:<any>{value:'a'}});
    expect(component.onActionEmit).toBeDefined();
  });
});
