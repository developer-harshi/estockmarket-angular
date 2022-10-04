import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { Register } from '../models/register.model';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  userSubmitted!: boolean;
  user=new  Register();
  registrationForm:any;
  constructor(private _authService:AuthService,private formbulider: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createUser();/*,this.passwordMatchingValidator);*/


  }
   createUser() {
    this.registrationForm = this.formbulider.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      // Address: ['', [Validators.required]],
      // Country: ['', [Validators.required]],
      // State: ['', [Validators.required]],
      // City: ['', [Validators.required]],
      // Pincode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])]
    }, { validators: this.passwordMatchingValidatior });
  }

  onSubmit(  )
  {
    // this.userSubmitted = true;
    console.log(this.registrationForm);
    // let register=new Register();
    const register=this.userData();
    console.log(register);
    this._authService.register(register).subscribe((res) => {
      console.log('Issue added!');
      // this.ngZone.run(() => this.router.navigateByUrl('/issues-list'));
    });
    this.router.navigateByUrl('/login');
  }
  // import { AbstractControl, ValidatorFn } from '@angular/forms';
  // export default class Validation {
  //   static match

  // passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
  //   return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
  //     { notmatched: true }
  // };
  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? "" :
        {notmatched: true};
}

  onReset() {
    this.userSubmitted = false;
    this.registrationForm.reset();
}


userData(): Register {


     this.user. id=null;
     this.user.name= this.name.value;
     this.user.email= this.email.value;
     this.user.password= this.password.value;
     this.user.Mobile=this.Mobile.value
  return this.user;

}


  get f(){
    return this.registrationForm.controls;
  }

  get name() {
    const c=this.registrationForm.get('name') as FormControl;
    console.log(c.value);
    return this.registrationForm.get('name') as FormControl;

}

get email() {
    return this.registrationForm.get('email') as FormControl;
}
get password() {
    return this.registrationForm.get('password') as FormControl;
}
get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
}
get Mobile() {
    return this.registrationForm.get('Mobile') as FormControl;
}

}
