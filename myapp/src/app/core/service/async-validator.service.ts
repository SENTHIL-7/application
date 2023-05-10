import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map, switchMap, timer } from 'rxjs';
import { EmployeeService } from 'src/app/shared/service/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService {

  constructor() { }
  static asyncEmailValidation(employeeService: EmployeeService, id?: number): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return timer(500).pipe(switchMap(() => {
        return employeeService.checkEmail(control.value, id).pipe(map((res: any) => {
          return res && res['emailExist'] ? { emailExist: true } : null;
        }))
      }))
    }
  }
}
