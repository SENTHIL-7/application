import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { AuthService } from '../../service/auth.service';
import { HttpRoutingService } from 'src/app/shared/service/http-routing.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
let uservalue =true;
let userSnackBar=false;
class MockAuth{
  signIn(){
    if(uservalue){
     return of({
user:{}
     })
    }
    else{
return throwError({error:{error:'error'}})
    }
  }
  message =new BehaviorSubject<any>({})
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
class MockRouter{
  navigate(url:string){
    return url ;
  }
}
describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      providers:[
        {provide:AuthService,useClass:MockAuth},
        {provide:HttpRoutingService,useClass:MockHttp},
        {provide:SnackbarService,useClass:MockSnackbar},
        {provide:Router,useClass:MockRouter},
      ],
      imports:[
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
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
    component.loginForm.setValue({
      email:'apsenthilkumar2001@gmail.com',
      password:'1234'
    })
    component.onSignIn();
    expect(component.onSignIn).toBeDefined();
  });
  it('should call signIn', () => {
    uservalue=false;
    component.loginForm.setValue({
      email:'apsenthilkumar2001@gmail.com',
      password:'1234'
    })
    component.onSignIn();
    expect(component.onSignIn).toBeDefined();
  });
  it('should call signIn in invalid form', () => {
    uservalue=false;
    component.onSignIn();
    expect(component.onSignIn).toBeDefined();
  });
});
