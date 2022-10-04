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

        this._authService.authUser(userData).subscribe(
            (response: UserForLogin) => {
                console.log(response);
                const user = response;
                if (user) {
                  // alert("Log in Success");

                    localStorage.setItem('userName', user.email??"");
                    localStorage.setItem('role', user.role??"");
                    console.log(user.token);
                    // this.alertify.success('Login Successful');
                    if(user.role==="admin")
                    {
                      localStorage.setItem('token',((user.token??"")));
                      console.log(localStorage.getItem("role"));
                    this.router.navigateByUrl("/home");

                    }
                    else{
                      console.log(localStorage.getItem("role"));
                      this._authService.authUserrolebased(userData).subscribe(
                        (response: UserForLogin) => {
                            console.log(response);
                            const userlogin = response;
                            if (userlogin) {
                              localStorage.setItem('token',((userlogin.token??"")));


                            }
                          });

                      this.router.navigateByUrl("/userhome");


                    }

                }
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
