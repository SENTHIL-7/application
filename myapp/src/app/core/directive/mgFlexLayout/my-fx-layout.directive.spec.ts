import { Component } from '@angular/core';
import { MyFxLayoutDirective } from './my-fx-layout.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `<div MyFxLayout="row wrap">
  <div>box1</div>
  <div>box2</div>
</div>
<div MyFxLayout='row'>
  <div>box1</div>
  <div>box2</div>
</div>`
})
class TestComponent {
}
describe('MyFxLayoutDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyFxLayoutDirective, TestComponent
      ],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    // element = fixture.debugElement.nativeElement.querySelectorAll('button');
  });
  it('Should call prevFunc', () => {
    fixture.detectChanges();
  })

  // it('should create an instance', () => {
  //   const directive = new MyFxLayoutDirective();
  //   expect(directive).toBeTruthy();
  // });
});
