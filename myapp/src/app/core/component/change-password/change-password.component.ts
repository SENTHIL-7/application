import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CustomValidatorService } from 'src/app/shared/service/custom-validator.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {
  message!: Observable<any>;
  passwordForm!: FormGroup;
  constructor(private customValidate: CustomValidatorService, private authService: AuthService) { }
  ngOnInit() {
    this.passwordForm = new FormGroup({
      oldPassword: new FormControl(null, Validators.required),
      newPassword: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    }, this.customValidate.validateAreEqual.bind(this)
    );
    this.message = this.authService.message;
  }

  onSubmit() {
    console.log(this.passwordForm);

  }
}
