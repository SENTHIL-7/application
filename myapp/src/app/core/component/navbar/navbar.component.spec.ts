import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {  ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { SnackbarComponent } from 'src/app/shared/component/snackbar/snackbar.component';
import { AboutComponent } from '../about/about.component';
// import { of } from 'rxjs';

class MockRouter{
  navigate(url:string){
    return url;
  }
}
fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers:[
        // {provide:Router,useClass:MockRouter},
        // {provide:ActivatedRoute,useValue:{
        //   params:of({})
        // }}
      ],
      imports:[
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatListModule,
        RouterModule ,
        RouterTestingModule.withRoutes(
          [
            {path: 'app/snackbar',component: AboutComponent}
          ]
        )
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call showGal', () => {
    component.showGal();
    expect(component.showGal).toBeDefined()
  });
});
