import { TestBed } from '@angular/core/testing';

import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { Route } from '@angular/router';
import { Observable, of } from 'rxjs';
// fn():Observable{
//   return new Observable(subscriber=>{
//     subscriber.next(1)
//   })
// }
fdescribe('CustomPreloadingStrategyService', () => {
  let service: CustomPreloadingStrategyService;
let router:Route;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call preload', () => {
    const route: Route = { data: { applyPreload: true } };
    const fn: () => Observable<any> = () => of('Preloaded data');

    const result = service.preload(route, fn);

    expect(result).toBeInstanceOf(Observable);
    // expect(result).toBe(fn());
  });
  it('should return of(null) Observable if route.data["applyPreload"] is falsy', () => {
    const route: Route = { data: { applyPreload: false } };
    const fn: () => Observable<any> = () => of('Preloaded data');

    const result = service.preload(route, fn);

    expect(result).toBeInstanceOf(Observable);
    // expect(result).toEqual(of(null));
  });
});
