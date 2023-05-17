import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpRoutingService } from 'src/app/shared/service/http-routing.service';
import { Router } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';
let isGlobal:boolean;
// let isRefreshToken:boolean;
let isLogin=true;
class MockHttp{
  getJson(url:string){
return of({})
  }
  postMethod(){
    if(isGlobal){
      if(isLogin){
        return of({
         user:{},
         token:'scsc'
        })
      }
      else{
      return throwError({error:{error:'error'}});
     
    }
    }
    else{
      return throwError({error:{error:'error'}})
    }
  }
}
class MockRouter{

}
fdescribe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      
      providers:[
        {provide:HttpRoutingService,useClass:MockHttp},
        {provide:Router,useClass:MockRouter},
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getMessage', () => {
    service.getMessage();
    expect(service.getMessage).toBeDefined();
  });
  it('should call test signIn', () => {
    let data ='test';
    isGlobal=true;
    isLogin=true;
   service.signIn(data).subscribe(()=>{});
    expect(service.signIn).toBeDefined();
  });
  it('should call test  error signIn', () => {
    let data ='test';
  isLogin=false;
  isGlobal=true;
   service.signIn(data).subscribe(
    {
      error: (err) => {}
    }
   );
    expect(service.signIn).toBeDefined();
  });
  it('should call logout', () => {
    service.logout();
    expect(service.logout).toBeDefined();
  });
  it('should call getToken', () => {
    sessionStorage.setItem('currentUserToken', JSON.stringify({ token: "sdcdscds", refreshToken:"dbmscdsjhj" }))
    service.getToken();
    expect(service.getToken).toBeDefined();
  });
  it('should call getRefreshToken()', () => {
    sessionStorage.setItem('currentUserToken', JSON.stringify({ token: "sdcdscds", refreshToken:"dbmscdsjhj" }))
    // isRefreshToken=true;
    service.getRefreshToken();
    expect(service.getRefreshToken).toBeDefined();
  });
});
