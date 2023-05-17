import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpRoutingService } from 'src/app/shared/service/http-routing.service';
import { SnackBar, SnackType } from 'src/app/core/model/snack-bar.model';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  message!: any;
  loginForm!: FormGroup;
  error!: boolean;
  hide = true;
  errorMessage!: string;
  constructor(private authService: AuthService,
    private router: Router,
    private http: HttpRoutingService,
    private snackbar: SnackbarService) { }
  ngOnInit() {
    this.authService.message.subscribe(res => this.message = res);
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  onSignIn() {
    if (this.loginForm.valid) {
      this.authService.signIn(this.loginForm.value).subscribe(
        // (response:any)=>{
        //   if (response && response['user']) {
        //           this.router.navigate(['/app/employees'])
        //         }
        // }
        {
          next: (response) => {
            if (response && response['user']) {
              this.router.navigate(['/app/employees'])
            }
          },
          error: (err) => {
            
            // if (err && err.error) {
              // this.errorMessage = err.error.error;
              // this.error = true;
              // this.snackbar.openSnackbar({
              //   message: this.errorMessage,
              //   snackType: SnackType.Error
              // });
            // }
          }
        }
      )
    }
  }
}
