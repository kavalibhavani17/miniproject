import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm: FormGroup = new FormGroup({
    emailOrMobile: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private authService: AuthService, private router: Router) {}
  //for not logging in directly with path
  ngOnInit(){
  localStorage.removeItem('token'); 
    localStorage.clear()
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        alert("Login Success");
        

        // store token
        localStorage.setItem("token", data.token);

        // navigate
        this.router.navigateByUrl("/dashboard");
      },
      (err:any) => {
        alert("invalid credentials");
      }
    );
  }
  showPassword: boolean = false;

togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}
}
