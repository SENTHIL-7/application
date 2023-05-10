import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  constructor() { }
  validateAreEqual(form: any) {
    if (form.value.confirmPassword && form.value.newPassword) {
      return form.value.confirmPassword === form.value.newPassword ? null : form.get('confirmPassword').setErrors({ missmatch: true })
    }
    return null
  }
}
