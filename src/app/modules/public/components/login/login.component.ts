import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { AuthTokenService } from 'src/app/core/services/auth-token.service';

interface IUser {
  password: string;
  showPassword: boolean;
  username: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: IUser;

  constructor(private router: Router, private authServiceregister:AuthService, private authtoken: AuthTokenService) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  login() {
    this.authServiceregister.login(this.loginForm.value)
  
    console.log(this.loginForm.value);
  }

  reset() {
    this.loginForm.reset();
  }
}
