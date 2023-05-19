import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
class MockSnackbar{
  openSnackbar(){
    return 
  }
}
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      providers:[
        {provide:SnackbarService,useClass:MockSnackbar}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call default', () => {
    component.default();
    expect(component.default).toBeDefined();
  });
  it('should call success', () => {
    component.success();
    expect(component.success).toBeDefined();
  });
  it('should call info', () => {
    component.info();
    expect(component.info).toBeDefined();
  });
  it('should call error', () => {
    component.error();
    expect(component.error).toBeDefined();
  });
  it('should call warning', () => {
    component.warning();
    expect(component.warning).toBeDefined();
  });
});
