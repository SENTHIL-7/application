import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { CustomValidatorService } from 'src/app/shared/service/custom-validator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/auth/service/auth.service';
import { BehaviorSubject } from 'rxjs';
class MockUsersServices{
  validateAreEqual(){
    return 
  }
}
class MockAuth{
  message =new BehaviorSubject<any>({})
}
describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponent ],
      providers:[
        {provide:AuthService,useClass:MockAuth},
        {provide:CustomValidatorService,useClass:MockUsersServices}
      ],
      imports:[
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call OnSubmit', () => {
    component.onSubmit()
    expect(component.onSubmit).toBeDefined();
  });
});
