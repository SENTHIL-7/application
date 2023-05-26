import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpRoutingService } from 'src/app/shared/service/http-routing.service';
import { Router } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';
let isLogin=true;
class MockHttp{
  getJson(url:string){
return of({})
  }
  postMethod(){
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
}
class MockRouter{

}
describe('AuthService', () => {
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
    isLogin=true;
   service.signIn(data).subscribe(()=>{});
    expect(service.signIn).toBeDefined();
  });
  it('should call test  error signIn', () => {
    let data ='test';
  isLogin=false;
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
    service.getRefreshToken();
    expect(service.getRefreshToken).toBeDefined();
  });
  it('should call isAuthenticated if part', () => {
    sessionStorage.setItem('currentUserToken', JSON.stringify({ token: "sdcdscds", refreshToken:"dbmscdsjhj" }))
    service.isAuthenticated();
    expect(service.isAuthenticated).toBeDefined();
  });
  it('should call isAuthenticated else part', () => {
    sessionStorage.setItem('currentUserToken', JSON.stringify({ token: "sdcdscds", refreshToken:"dbmscdsjhj" }));
    sessionStorage.removeItem('currentUserToken');
    service.isAuthenticated();
    expect(service.isAuthenticated).toBeDefined();
  });
});
