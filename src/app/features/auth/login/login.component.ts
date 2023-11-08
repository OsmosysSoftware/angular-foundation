import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor() {
    console.log('perform required logic');
  }

  inSubmission = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  login() {
    this.inSubmission = true;
    setTimeout(() => {
      if (this.loginForm.valid) {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
        console.log(`Logged in with email: ${email} and password ${password}`);
        this.inSubmission = false;
      }
    }, 3000);
  }
}
