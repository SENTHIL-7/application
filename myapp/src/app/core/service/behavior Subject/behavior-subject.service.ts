import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {

  message = new BehaviorSubject<any>(null);
  constructor() {
    this.message.next("Initial Message")
  }

}
