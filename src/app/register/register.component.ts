import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from '../email-validator.directive';
import { AuthService } from '../core/services/auth.service';

interface IUser {
  username:string;
  email: string;
  password: string;
  showPassword: boolean;
  }
  

@Component({
  selector: 'app-register', 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user: IUser;
 

  constructor(private router:Router, private  authServiceregister:AuthService) {
    this.user = {} as IUser;
   }

  ngOnInit(): void {
    this.registerForm = new FormGroup({ 
      username: new FormControl("",[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(7),
      ]),

      email: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
        emailValidator(),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
     })
  }
  get username() {
    return this.registerForm.get('username')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }


submitted() {
  this.authServiceregister.register(this.registerForm.value)


}
reset(){
  this.registerForm.reset()
    }

}
