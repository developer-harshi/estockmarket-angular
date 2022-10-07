import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Login, UserForLogin } from '../models/login.model';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any
  loginData=new UserForLogin();
  constructor(private _authService:AuthService,private formbulider: FormBuilder,private router:Router) { }



  ngOnInit(): void {
    this.loginForm = this.formbulider.group({

      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]

      // Address: ['', [Validators.required]],
      // Country: ['', [Validators.required]],
      // State: ['', [Validators.required]],
      // City: ['', [Validators.required]],
      // Pincode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])]
    });/*,this.passwordMatchingValidator);*/
  }
  onSubmit()
  {
    console.log(this.loginForm.value);
        const userData=this.login();
        console.log(userData);

        this._authService.authenticate(userData).subscribe(
            (response: UserForLogin) => {
                console.log(response);
                const user = response;

                    localStorage.setItem('userName', user.email??"");
                    localStorage.setItem('token',((user.token??"")));
                      this.router.navigateByUrl("/home");

            } , error => {
              console.log('httperror:');
              console.log(error);
          }

        );
  }
  get f(){
    return this.loginForm.controls;
  }

  login(): Login {
this.loginData.password=this.password.value;
this.loginData.email=this.email.value;

 return this.loginData;

}
get email() {
  return this.loginForm.get('email') as FormControl;
}
get password() {
  return this.loginForm.get('password') as FormControl;
}
redirect()
{
  this.router.navigateByUrl("/register");
}

}
