import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription, filter, map, mergeMap } from 'rxjs';
import { BehaviorSubjectService } from '../../service/behavior Subject/behavior-subject.service';

@Component({
  selector: 'app-observable',
  template: `<h1>Observable</h1>
  <button (click)="changeMsg()">change</button>`,
  styles: [`h1{
    color:red
  }`]
})
export class ObservableComponent implements OnInit, OnDestroy {
  constructor(private behaviorsubject: BehaviorSubjectService) { }
  obs!: Observable<number>;
  obsSubscription!: Subscription;
  subscriptionArray!: Subscription;
  ngOnInit() {
    this.subscriptionArray = new Subscription();
    this.obs = new Observable((subscriber => {
      subscriber.next(1)
      // setInterval(() => {
      //   subscriber.next(2)
      // }, 1000)
      // subscriber.error("this is error")
      // subscriber.next(3)
      // subscriber.next(4)
      // subscriber.next(5)
      // subscriber.next(6)
      // subscriber.complete()
    }));
    // this.obs.subscribe(res => {
    //   console.log('response :', res)
    // }, error => {
    //   console.log('error msg :', error)
    // }, () => {
    //   console.log('this is complated')
    // })

    // this.subscriptionArray.add(this.obs.subscribe(
    //   {
    //     next(value) {
    //       console.log('respons :', value)
    //     },
    //     error(err) {
    //       console.log("err msg :", err);
    //     },
    //     complete() {
    //       console.log('complated')
    //     },
    //   }
    // ))
    //
    //pipe
    // this.obs.pipe(filter(x => x > 2)).subscribe(res => {
    //   console.log("filter values :", res)
    // }
    // )
    // this.obs.pipe(map(x => x * 100)).subscribe(res => {
    //   console.log("filter values :", res)
    // }
    // )


    //subscribe  getObs
    // this.obsSubscription = this.getObs().subscribe(res => {
    //   console.log("response :", res)
    // })
    // this.subscriptionArray.add(this.getObs().subscribe(res => {
    //   console.log("response :", res)
    // }));

    //pipe mergeMap
    // this.getObs().pipe(mergeMap(
    //   (res) => {
    //     console.log('res:', res);

    //     return this.getObs1(res)
    //   }
    // ), mergeMap((res1) => {
    //   console.log('res1:', res1);
    //   return this.getObs2(res1)
    // })
    // ).subscribe(response => {
    //   console.log("final response :", response)
    // })


    //Behavior Subject
    this.behaviorsubject.message.subscribe(res => {
      console.log("observable message from oninit response :", res)
    })


  }
  //function obs
  getObs(): Observable<number> {
    return new Observable((subscriber => {
      subscriber.next(1)
      // subscriber.next(2);
      // subscriber.next(3)
      // subscriber.next(4)
      // subscriber.next(5)
      // setInterval(() => {
      //   subscriber.next(6)
      // }, 1000)
    }))

  }
  // getObs1(n: number): Observable<number> {
  //   return new Observable((subscriber => {
  //     subscriber.next(100)
  //   }))

  // }
  // getObs2(n: number): Observable<number> {
  //   return new Observable((subscriber => {
  //     subscriber.next(200);
  //   }))

  // }
  changeMsg() {
    this.behaviorsubject.message.next("message is change from observable component")
  }
  ngOnDestroy(): void {
    // this.obsSubscription.unsubscribe()
    // this.subscriptionArray.unsubscribe()
  }
}
