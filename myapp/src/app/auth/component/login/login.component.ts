import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message!: any;
  loginForm!: FormGroup;
  user = { email: 'senthil@gmail.com', password: "1234" };
  token = "DMDSVUIF%HGGHSDS4$#SBSJV^JSD";
  constructor(private authService: AuthService,
    private router: Router) { }
  ngOnInit() {
    this.authService.message.subscribe(res => this.message = res);
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  signIn() {
    if (this.loginForm.valid) {
      if (this.loginForm.get('email')?.value == this.user.email && this.loginForm.get('password')?.value == this.user.password) {
        sessionStorage.setItem('currentUser', JSON.stringify({ token: this.token }))
        this.router.navigateByUrl('/app/employee-registration');
      }
    }
  }
}
