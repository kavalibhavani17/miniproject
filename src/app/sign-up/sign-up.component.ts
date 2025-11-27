import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 signupForm:FormGroup=new FormGroup(
  {
    name: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    password: new FormControl(""),
  }
 )
 constructor(private authService:AuthService){}
 data:any=[];
 submit(){
  console.log(this.signupForm.value);
  this.authService.signup(this.signupForm.value).subscribe(
    (data:any)=>{
      alert("regstered successfully");
    },
    (err:any)=>{
      alert("internal server error");
      alert(err.error?.message||"server error");
    }
  )
  
 }
}
