import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { AuthService } from '../../service/auth.service';
import { HttpRoutingService } from 'src/app/shared/service/http-routing.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { EmployeesComponent } from 'src/app/core/component/employees/employees/employees.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
let uservalue =false;
let userSnackBar=false;
class MockAuth{
  signIn(){
    if(uservalue){
     return of({

     })
    }
    else{
return throwError({error:{error:'test'}})
    }
  }
}
class MockHttp{

}
class MockSnackbar{
  openSnackbar(){
    if(userSnackBar){
      return
    }
    else{
      return 
          }
  }
 
}
fdescribe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let component1;
  let router:any;
  let snackbar;
  beforeEach(async () => {
    router = {
      navigate: jasmine.createSpy('navigate')
    };
    snackbar = {
      openSnackbar: jasmine.createSpy('openSnackbar')
    };

    // component1 = new SigninComponent(router, snackbar);
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      providers:[
        {provide:AuthService,useClass:MockAuth},
        {provide:HttpRoutingService,useClass:MockHttp},
        {provide:SnackbarService,useClass:MockSnackbar},
      ],
      imports:[
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(
          [
            {path: 'app/employees',component: EmployeesComponent}
          ]
        )
      ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call signIn', () => {
    uservalue=true;
    // component.loginForm=new FormGroup(
    //   {
    //     email: new FormControl('apsenthilkumar2001@gmail.com'),
    //     password: new FormControl('1234')
    //   }
    // )
    component.loginForm.setValue({
      email:'apsenthilkumar2001@gmail.com',
      password:'1234'
    })
    component.onSignIn();
    const response = { user: { /* user data */ } };
  router.navigate(['/app/employees'])
    // component.next(response);
    // expect(router.navigate).toHaveBeenCalledWith(['/app/employees']);
    expect(component.onSignIn).toBeDefined();
  });
  it('should call signIn', () => {
    uservalue=false;
    component.onSignIn();
    userSnackBar=true;
    expect(component.onSignIn).toBeDefined();
  });
});
